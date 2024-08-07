import { vec3, mat4 } from "gl-matrix";
import { Deg2Rad } from "../../Utilities/MathUtils";
import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";

export class QuadComponent extends BaseComponent {
  model!: mat4;

  constructor(parent: GameObject) {
    super("QuadComponent", parent);
  }

  update = () => {
    this.model = mat4.create();
    mat4.translate(
      this.model,
      this.model,
      this.parent.transformComponent.position
    );
  };

  getModel = (): mat4 => {
    return this.model;
  };
}
