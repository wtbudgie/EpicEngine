import { generateId } from "../Utilities/MathUtils";
import { BaseComponent } from "./BaseComponent";
import { TransformComponent } from "./Components/TransformComponent";

export class GameObject {
    name: string;
    instanceId: number;
    components: BaseComponent[];
    transformComponent: TransformComponent;

    constructor(name: string) {
        this.name = name;
        this.instanceId = generateId(10);
        this.components = [];

        this.transformComponent = new TransformComponent(this);
    }

    getComponent<T extends BaseComponent>(componentType: new (...args: any[]) => T): T | null {
        for (const component of this.components) {
            if (component instanceof componentType) {
                return component as T;
            }
        }
        return null;
    }

    addComponent(component: BaseComponent): BaseComponent | null {
        for (const comp of this.components) {
            if (comp.name == component.name) {
                console.error("Trying to add duplicate component with same name.");
                return null;
            }
        }

        this.components.push(component);
        return component;
    }
}
