import { Material } from "./Material";
import { TriangleMesh } from "./TriangleMesh";
// @ts-ignore -- works trust me
import shader from "./Shaders/shaders.wgsl?raw";
import { mat4 } from "gl-matrix";
import { CameraComponent } from "../GameObjects/Components/CameraComponent";

export class Renderer {
    canvas: HTMLCanvasElement;

    adapter!: GPUAdapter;
    device!: GPUDevice;
    context!: GPUCanvasContext;
    format!: GPUTextureFormat;

    uniformBuffer!: GPUBuffer;
    bindGroup!: GPUBindGroup;
    pipeline!: GPURenderPipeline;

    depthStencilState!: GPUDepthStencilState;
    depthStencilBuffer!: GPUTexture;
    depthStencilView!: GPUTextureView;
    depthStencilAttachment!: GPURenderPassDepthStencilAttachment;

    triangleMesh!: TriangleMesh;
    material!: Material;
    objectBuffer!: GPUBuffer;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    initialize = async (): Promise<void> => {
        await this.setupDevice();
        await this.createAssets();
        await this.createDepthBufferResources();
        await this.createPipeline();
    };

    setupDevice = async () => {
        this.adapter = <GPUAdapter>await navigator.gpu.requestAdapter();
        this.device = <GPUDevice>await this.adapter.requestDevice();
        this.context = <GPUCanvasContext>this.canvas.getContext("webgpu");
        this.format = "bgra8unorm";

        this.context.configure({
            device: this.device,
            format: this.format,
            alphaMode: "opaque",
        });
    };

    createAssets = async () => {
        this.triangleMesh = new TriangleMesh(this.device);
        this.material = new Material();

        const modelBufferDescriptor: GPUBufferDescriptor = {
            size: 64 * 2048,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        };
        this.objectBuffer = this.device.createBuffer(modelBufferDescriptor);

        await this.material.initialize(this.device, "miot.jpg");
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
        this.uniformBuffer = this.device.createBuffer({
            size: 64 * 2,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        const bindGroupLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX,
                    buffer: {},
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {},
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {},
                },
                {
                    binding: 3,
                    visibility: GPUShaderStage.VERTEX,
                    buffer: { type: "read-only-storage", hasDynamicOffset: false },
                },
            ],
        });

        this.bindGroup = this.device.createBindGroup({
            layout: bindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer,
                    },
                },
                {
                    binding: 1,
                    resource: this.material.view,
                },
                {
                    binding: 2,
                    resource: this.material.sampler,
                },
                {
                    binding: 3,
                    resource: { buffer: this.objectBuffer },
                },
            ],
        });

        const pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [bindGroupLayout],
        });

        this.pipeline = this.device.createRenderPipeline({
            vertex: {
                module: this.device.createShaderModule({ code: shader }),
                entryPoint: "vs_main",
                buffers: [this.triangleMesh.bufferLayout],
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

    startRender = async (camera: CameraComponent, triangleObjects: Float32Array, triangleCount: number) => {
        if (!this.device) {
            throw new Error("GPUDevice is not initialized.");
        }

        const projection = mat4.create();
        mat4.perspective(projection, Math.PI / 4, 800 / 600, 0.1, 1000);

        const view = camera.getView();

        this.device.queue.writeBuffer(this.objectBuffer, 0, triangleObjects, 0, triangleObjects.length);

        this.device.queue.writeBuffer(this.uniformBuffer, 0, new Float32Array(view));
        this.device.queue.writeBuffer(this.uniformBuffer, 64, new Float32Array(projection));

        const commandEncoder: GPUCommandEncoder = this.device.createCommandEncoder();
        const textureView: GPUTextureView = this.context.getCurrentTexture().createView();

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
        renderpass.setVertexBuffer(0, this.triangleMesh.buffer);
        renderpass.setBindGroup(0, this.bindGroup);
        renderpass.draw(3, triangleCount, 0, 0);
        renderpass.end();

        this.device.queue.submit([commandEncoder.finish()]);
    };
}
