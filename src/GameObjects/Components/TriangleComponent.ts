import { vec3, mat4 } from "gl-matrix";
import { Deg2Rad } from "../../Utilities/MathUtils";
import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";

export class TriangleComponent extends BaseComponent {
  model!: mat4;

  constructor(gameObject: GameObject, position: vec3, theta: number) {
    super("TriangleComponent", gameObject);
  }

  update = () => {
    this.gameObject.transformComponent.eulers[2] += 1;
    this.gameObject.transformComponent.eulers[2] %= 360;

    this.model = mat4.create();
    mat4.translate(
      this.model,
      this.model,
      this.gameObject.transformComponent.position
    );
    mat4.rotateZ(
      this.model,
      this.model,
      Deg2Rad(this.gameObject.transformComponent.eulers[2])
    );
  };

  getModel = (): mat4 => {
    return this.model;
  };
}
