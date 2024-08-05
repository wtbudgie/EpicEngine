import { vec3 } from "gl-matrix";
import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";

export class TransformComponent extends BaseComponent {
    position: vec3;
    eulers: vec3;

    constructor(parent: GameObject) {
        super("TransformComponent", parent);

        this.position = [0, 0, 0];
        this.eulers = vec3.create();
        this.eulers[2] = 0;
    }
}
