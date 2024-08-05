import { vec3, mat4 } from "gl-matrix";
import { Deg2Rad } from "../../Utilities/MathUtils";
import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";

export class TriangleComponent extends BaseComponent {
  model!: mat4;

  constructor(parent: GameObject) {
    super("TriangleComponent", parent);
  }

  update = () => {
    this.parent.transformComponent.eulers[2] += 1;
    this.parent.transformComponent.eulers[2] %= 360;

    this.model = mat4.create();
    mat4.translate(
      this.model,
      this.model,
      this.parent.transformComponent.position
    );
    mat4.rotateZ(
      this.model,
      this.model,
      Deg2Rad(this.parent.transformComponent.eulers[2])
    );
  };

  getModel = (): mat4 => {
    return this.model;
  };
}
