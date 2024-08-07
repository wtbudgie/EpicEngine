import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";
import { Material } from "../../Renderer/Material";
import RendererSingleton from "../../Renderer/Singletons/RendererSingleton";

export class MaterialComponent extends BaseComponent {
    material!: Material;

    constructor(parent: GameObject, matUrl: string) {
        super("MaterialComponent", parent);
        this.setMaterial(matUrl);
    }

    setMaterial = (matUrl: string) => {
        const renderer = RendererSingleton.getInstance();
        const mats = renderer.materials.filter((mat) => mat.url == matUrl);
        if (mats.length > 1)
            throw new Error("Multiple instances of same material url found. Please remove duplicates.");

        this.material = mats[0];
    };
}
