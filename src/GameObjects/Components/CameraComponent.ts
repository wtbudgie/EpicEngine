import { mat4, vec3 } from "gl-matrix";
import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";
import { TransformComponent } from "./TransformComponent";
import { Deg2Rad } from "../../Utilities/MathUtils";

export class CameraComponent extends BaseComponent {
  transform: TransformComponent;
  view: mat4;
  forwards: vec3;
  right: vec3;
  up: vec3;

  constructor(parent: GameObject) {
    super("CameraComponent", parent);
    this.transform = this.gameObject.transformComponent;

    this.view = mat4.create();
    this.forwards = vec3.create();
    this.right = vec3.create();
    this.up = vec3.create();
  }

  update = () => {
    this.forwards = [
      Math.cos(Deg2Rad(this.transform.eulers[2])) *
        Math.cos(Deg2Rad(this.transform.eulers[1])),
      Math.sin(Deg2Rad(this.transform.eulers[2])) *
        Math.cos(Deg2Rad(this.transform.eulers[1])),
      Math.sin(Deg2Rad(this.transform.eulers[1])),
    ];

    vec3.cross(this.right, this.forwards, [0, 0, 1]);
    vec3.cross(this.up, this.right, this.forwards);

    let target: vec3 = vec3.create();
    vec3.add(target, new Float32Array(this.transform.position), this.forwards);
    mat4.lookAt(
      this.view,
      new Float32Array(this.transform.position),
      target,
      this.up
    );
  };

  getView = (): mat4 => {
    return this.view;
  };
}
