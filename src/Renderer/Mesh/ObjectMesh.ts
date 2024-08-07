import { vec3, vec2 } from "../../EpicEngine";
import { Mesh } from "./Mesh";

export class ObjectMesh extends Mesh {
    v: vec3[] = [];
    vt: vec2[] = [];
    vn: vec3[] = [];
    buffer!: GPUBuffer; // Assuming buffer is of type GPUBuffer

    constructor() {
        super();
    }

    async setup(device: GPUDevice, modelUrl: string) {
        await this.readFile(modelUrl);
        this.verticieCount = this.verticies.length / 5;
        this.setupBuffer(device);
    }

    private async readFile(fileUrl: string) {
        const response: Response = await fetch(fileUrl);
        const text = await response.text();
        const lines = text.split("\n");

        const result: number[] = [];

        lines.forEach((line) => {
            const parts = line.trim().split(/\s+/);
            switch (parts[0]) {
                case "v":
                    this.readVertexLine(parts);
                    break;
                case "vt":
                    this.readTextCoordLine(parts);
                    break;
                case "vn":
                    this.readNormalLine(parts);
                    break;
                case "f":
                    this.readFaceLine(parts, result);
                    break;
            }
        });

        this.verticies = new Float32Array(result);
    }

    private readVertexLine(parts: string[]) {
        const newVertex: vec3 = [parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])];
        this.v.push(newVertex);
    }

    private readTextCoordLine(parts: string[]) {
        const newTextCoord: vec2 = [parseFloat(parts[1]), parseFloat(parts[2])];
        this.vt.push(newTextCoord);
    }

    private readNormalLine(parts: string[]) {
        const newNormal: vec3 = [parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])];
        this.vn.push(newNormal);
    }

    private readFaceLine(parts: string[], result: number[]) {
        parts.slice(1).forEach((facePart) => {
            this.readCorner(facePart, result);
        });
    }

    private readCorner(vertexDescription: string, result: number[]) {
        const [vIndex, vtIndex, vnIndex] = vertexDescription.split("/").map((index) => parseInt(index, 10) - 1);

        const v = this.v[vIndex];
        const vt = this.vt[vtIndex];
        // const vn = this.vn[vnIndex]; // Uncomment if you want to use normals

        if (!v || !vt) return;

        // Push vertex and texture coordinate to result
        result.push(v[0], v[1], v[2], vt[0], vt[1]);
    }

    private setupBuffer(device: GPUDevice) {
        this.buffer = device.createBuffer({
            size: this.verticies.byteLength,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });

        // Copy data to buffer
        new Float32Array(this.buffer.getMappedRange()).set(this.verticies);
        this.buffer.unmap();
    }
}
