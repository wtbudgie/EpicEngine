import RendererSingleton from "./Singletons/RendererSingleton";

export class Material {
  url: string;
  texture!: GPUTexture;
  view!: GPUTextureView;
  bindGroup!: GPUBindGroup;

  samplerDescriptor!: GPUSamplerDescriptor;
  sampler!: GPUSampler;

  constructor(imageUrl: string) {
    this.url = imageUrl;
    const mats = RendererSingleton.getInstance().materials.filter(
      (m) => m.url == imageUrl
    );
    if (mats.length !== 0)
      throw new Error(
        "Material with image already found, please use existing material."
      );
  }

  initialize = async (
    device: GPUDevice,
    url: string,
    bindGroupLayout: GPUBindGroupLayout
  ) => {
    const response: Response = await fetch(url);
    const blob: Blob = await response.blob();
    const imageData = await createImageBitmap(blob);
    this.loadImageBitmap(device, imageData);

    const viewDescriptor: GPUTextureViewDescriptor = {
      format: "rgba8unorm",
      dimension: "2d",
      aspect: "all",
      baseMipLevel: 0,
      mipLevelCount: 1,
      baseArrayLayer: 0,
      arrayLayerCount: 1,
    };
    this.view = this.texture.createView(viewDescriptor);

    const samplerDescriptor: GPUSamplerDescriptor = {
      addressModeU: "repeat",
      addressModeV: "repeat",
      magFilter: "linear",
      minFilter: "nearest",
      mipmapFilter: "nearest",
      maxAnisotropy: 1,
    };
    this.sampler = device.createSampler(samplerDescriptor);

    const bindGroup = device.createBindGroup({
      layout: bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: this.view,
        },
        {
          binding: 1,
          resource: this.sampler,
        },
      ],
    });
    this.bindGroup = bindGroup;
  };

  loadImageBitmap = async (device: GPUDevice, imageData: ImageBitmap) => {
    const textureDescriptor: GPUTextureDescriptor = {
      size: { width: imageData.width, height: imageData.height },
      format: "rgba8unorm",
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT,
    };

    this.texture = device.createTexture(textureDescriptor);
    device.queue.copyExternalImageToTexture(
      { source: imageData },
      { texture: this.texture },
      textureDescriptor.size
    );
  };
}
