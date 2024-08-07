import { vec3, vec2 } from "../../EpicEngine";
import { Mesh } from "./Mesh";

export class TriangleMesh extends Mesh {
    constructor(device: GPUDevice) {
        super();

        this.verticies = new Float32Array([
            0.0, 0.0, 0.5, 0.5, 0.0, 0.0, -0.5, -0.5, 0.0, 1.0, 0.0, 0.5, -0.5, 1.0, 1.0,
        ]);
        this.verticieCount = 3;

        this.initialize(device);
    }
}
