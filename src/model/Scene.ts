import { TriangleComponent } from "./Triangle";
import { CameraComponent } from "./Camera";
import { mat4, vec3 } from "gl-matrix";

export class Scene {
    triangles: TriangleComponent[];
    camera: CameraComponent;
    objectData: Float32Array;
    triangleCount: number;

    constructor() {
        this.triangles = [];
        this.objectData = new Float32Array(16 * 1024);
        this.triangleCount = 0;

        var i = 0;
        for (var y = -5; y < 5; y++) {
            this.triangles.push(new TriangleComponent([2, y, 0], 0));

            var emptyMatrix = mat4.create();
            for (var j = 0; j < 16; j++) {
                this.objectData[16 * i + j] = <number>emptyMatrix.at(j);
            }
            i++;
            this.triangleCount++;
        }

        this.triangles.push(new TriangleComponent([2, 0, 0], 0));
        this.camera = new CameraComponent([-2, 0, 0.5], 0, 0);
    }

    update = () => {
        var i = 0;

        this.triangles.forEach((triangle) => {
            triangle.update();
            let model = triangle.getModel();
            for (var j = 0; j < 16; j++) {
                this.objectData[16 * i + j] = <number>model.at(j);
            }
            i++;
        });
        this.camera.update();
    };

    spinPlayer = (dX: number, dY: number) => {
        this.camera.eulers[2] -= dX;
        this.camera.eulers[2] %= 360;

        this.camera.eulers[1] = Math.min(89, Math.max(-89, this.camera.eulers[1] + dY));
    };

    movePlayer = (forwardAmount: number, rightAmount: number) => {
        vec3.scaleAndAdd(this.camera.position, this.camera.position, this.camera.forwards, forwardAmount);
        vec3.scaleAndAdd(this.camera.position, this.camera.position, this.camera.right, rightAmount);
    };

    getCamera = (): CameraComponent => {
        return this.camera;
    };

    getTriangles = (): Float32Array => {
        return this.objectData;
    };
}
