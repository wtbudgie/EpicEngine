import { vec3, vec2 } from "../../EpicEngine";
import { Mesh } from "./Mesh";

export class QuadMesh extends Mesh {
    constructor(device: GPUDevice) {
        super();

        this.verticies = new Float32Array([
            -0.5, -0.5, 0.0, 0.0, 0.0, 0.5, -0.5, 0.0, 1.0, 0.0, 0.5, 0.5, 0.0, 1.0, 1.0, 0.5, 0.5, 0.0, 1.0, 1.0, -0.5,
            0.5, 0.0, 0.0, 1.0, -0.5, -0.5, 0.0, 0.0, 0.0,
        ]);
        this.verticieCount = 6;

        this.initialize(device);
    }
}
