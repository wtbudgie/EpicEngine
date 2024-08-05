import { GameObject } from "./GameObject";

export class BaseComponent {
  name: string;
  gameObject: GameObject;

  constructor(name: string, parentObject: GameObject) {
    this.name = name;
    this.gameObject = parentObject;
  }
}
