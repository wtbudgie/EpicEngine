export class Mesh {
    initialized: boolean = false;

    buffer!: GPUBuffer;
    bufferLayout!: GPUVertexBufferLayout;
    bufferDescriptor!: GPUBufferDescriptor;
    bufferUsageFlags!: GPUBufferUsageFlags;

    verticies!: Float32Array;
    verticieCount!: number;

    constructor() {}

    initialize = (device: GPUDevice) => {
        if (this.initialized) return;
        this.bufferUsageFlags = GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST;
        this.bufferDescriptor = {
            size: this.verticies.byteLength,
            usage: this.bufferUsageFlags,
            mappedAtCreation: true,
        };

        this.buffer = device.createBuffer(this.bufferDescriptor);
        new Float32Array(this.buffer.getMappedRange()).set(this.verticies);
        this.buffer.unmap();

        this.bufferLayout = {
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
        };

        this.initialized = true;
    };
}
