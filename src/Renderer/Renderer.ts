import { ObjectTypes, RenderData } from "./Defininitions";
import { Material } from "./Material";
import { TriangleMesh } from "./Meshes/TriangleMesh";
import { QuadMesh } from "./Meshes/QuadMesh";
// @ts-ignore -- works trust me
import shader from "./Shaders/shaders.wgsl?raw";
import { mat4 } from "gl-matrix";
import { Scene } from "./Scene";
import DeviceSingleton from "./Singletons/DeviceSingleton";

export class Renderer {
  canvas: HTMLCanvasElement;

  adapter!: GPUAdapter;
  device!: GPUDevice;
  context!: GPUCanvasContext;
  format!: GPUTextureFormat;

  uniformBuffer!: GPUBuffer;
  pipeline!: GPURenderPipeline;
  frameGroupLayout!: GPUBindGroupLayout;
  materialGroupLayout!: GPUBindGroupLayout;
  frameBindGroup!: GPUBindGroup;

  depthStencilState!: GPUDepthStencilState;
  depthStencilBuffer!: GPUTexture;
  depthStencilView!: GPUTextureView;
  depthStencilAttachment!: GPURenderPassDepthStencilAttachment;

  activeScene!: Scene;

  triangleMesh!: TriangleMesh;
  quadMesh!: QuadMesh;
  materials: Material[];
  objectBuffer!: GPUBuffer;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.materials = [];
  }

  addTexture = (mat: Material) => {
    this.materials.push(mat);
  };

  initialize = async (): Promise<void> => {
    await this.setupDevice();
    await this.createBindGroupLayouts();
    await this.createAssets();
    await this.createDepthBufferResources();
    await this.createPipeline();
    await this.createBindGroup();
  };

  setupDevice = async () => {
    this.adapter = <GPUAdapter>await navigator.gpu.requestAdapter();

    await DeviceSingleton.initialize(this.adapter);
    this.device = DeviceSingleton.getInstance();

    this.context = <GPUCanvasContext>this.canvas.getContext("webgpu");
    this.format = "bgra8unorm";

    this.context.configure({
      device: this.device,
      format: this.format,
      alphaMode: "opaque",
    });
  };

  createBindGroupLayouts = async () => {
    this.frameGroupLayout = this.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.VERTEX,
          buffer: {},
        },
        {
          binding: 1,
          visibility: GPUShaderStage.VERTEX,
          buffer: { type: "read-only-storage" },
        },
      ],
    });

    this.materialGroupLayout = this.device.createBindGroupLayout({
      entries: [
        {
          binding: 0,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {},
        },
        {
          binding: 1,
          visibility: GPUShaderStage.FRAGMENT,
          sampler: {},
        },
      ],
    });
  };

  createAssets = async () => {
    for (let mat of this.materials) {
      await mat.initialize(this.device, mat.url, this.materialGroupLayout);
      console.log(`Initialized material: ${mat.url}`);
    }

    this.uniformBuffer = this.device.createBuffer({
      size: 64 * 2,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const modelBufferDescriptor: GPUBufferDescriptor = {
      size: 64 * 2048,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    };
    this.objectBuffer = this.device.createBuffer(modelBufferDescriptor);
  };

  createDepthBufferResources = async () => {
    this.depthStencilState = {
      format: "depth24plus-stencil8",
      depthWriteEnabled: true,
      depthCompare: "less-equal",
    };

    const size: GPUExtent3D = {
      width: this.canvas.width,
      height: this.canvas.height,
      depthOrArrayLayers: 1,
    };
    const depthBufferDescriptor: GPUTextureDescriptor = {
      size: size,
      format: "depth24plus-stencil8",
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    };
    this.depthStencilBuffer = this.device.createTexture(depthBufferDescriptor);

    const viewDescriptor: GPUTextureViewDescriptor = {
      format: "depth24plus-stencil8",
      dimension: "2d",
      aspect: "all",
    };
    this.depthStencilView = this.depthStencilBuffer.createView(viewDescriptor);
    this.depthStencilAttachment = {
      view: this.depthStencilView,
      depthClearValue: 1.0,
      depthLoadOp: "clear",
      depthStoreOp: "store",
      stencilLoadOp: "clear",
      stencilStoreOp: "discard",
    };
  };

  createPipeline = async () => {
    const pipelineLayout = this.device.createPipelineLayout({
      bindGroupLayouts: [this.frameGroupLayout, this.materialGroupLayout],
    });

    this.pipeline = this.device.createRenderPipeline({
      vertex: {
        module: this.device.createShaderModule({ code: shader }),
        entryPoint: "vs_main",
        buffers: [
          // hard-code buffer layout TO BE CHANGED!!!
          {
            arrayStride: 20,
            attributes: [
              {
                shaderLocation: 0,
                format: "float32x3",
                offset: 0,
              },
              {
                shaderLocation: 1,
                format: "float32x2",
                offset: 12,
              },
            ],
          },
        ],
      },

      fragment: {
        module: this.device.createShaderModule({
          code: shader,
        }),
        entryPoint: "fs_main",
        targets: [{ format: this.format }],
      },
      primitive: {
        topology: "triangle-list",
      },
      layout: pipelineLayout,
      depthStencil: this.depthStencilState,
    });
  };

  createBindGroup = async () => {
    this.frameBindGroup = this.device.createBindGroup({
      layout: this.frameGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: this.uniformBuffer },
        },
        {
          binding: 1,
          resource: { buffer: this.objectBuffer },
        },
      ],
    });
  };

  startRender = async (activeScene: Scene) => {
    this.activeScene = activeScene;
    const renderableObjects = activeScene.getObjectData();

    if (!this.device) {
      throw new Error("GPUDevice is not initialized.");
    }

    const projection = mat4.create();
    mat4.perspective(projection, Math.PI / 4, 800 / 600, 0.1, 500);

    const view = renderableObjects.viewTransform;

    this.device.queue.writeBuffer(
      this.objectBuffer,
      0,
      renderableObjects.modelTransforms,
      0,
      renderableObjects.modelTransforms.length
    );

    this.device.queue.writeBuffer(this.uniformBuffer, 0, <ArrayBuffer>view);
    this.device.queue.writeBuffer(
      this.uniformBuffer,
      64,
      <ArrayBuffer>projection
    );

    const commandEncoder: GPUCommandEncoder =
      this.device.createCommandEncoder();
    const textureView: GPUTextureView = this.context
      .getCurrentTexture()
      .createView();

    const renderpass: GPURenderPassEncoder = commandEncoder.beginRenderPass({
      colorAttachments: [
        {
          view: textureView,
          clearValue: { r: 0.5, g: 0.0, b: 0.25, a: 1.0 },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
      depthStencilAttachment: this.depthStencilAttachment,
    });

    renderpass.setPipeline(this.pipeline);
    renderpass.setBindGroup(0, this.frameBindGroup);

    const gameObjects = activeScene.getGameObjects();
    let objectsDrawn = 0;
    gameObjects.forEach((obj) => {
      obj.createMeshes();
      renderpass.setVertexBuffer(0, obj.mesh.buffer); // mesh buffer
      renderpass.setBindGroup(1, obj.material.bindGroup); // texture
      renderpass.draw(
        obj.verticieCount,
        1,
        0,
        objectsDrawn * obj.verticieCount
      );
      objectsDrawn++;
    });

    renderpass.end();
    this.device.queue.submit([commandEncoder.finish()]);
  };
}
