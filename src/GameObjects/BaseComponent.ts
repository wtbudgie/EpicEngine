import { GameObject } from "./GameObject";

export class BaseComponent {
    name: string;
    parent: GameObject;

    constructor(name: string, parent: GameObject) {
        this.name = name;
        this.parent = parent;
    }

    update = (): void => {};
}
