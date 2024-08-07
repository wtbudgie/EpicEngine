import { Material } from "../Renderer/Material";
import { TriangleMesh } from "../Renderer/Meshes/TriangleMesh";
import DeviceSingleton from "../Renderer/Singletons/DeviceSingleton";
import RendererSingleton from "../Renderer/Singletons/RendererSingleton";
import { generateId } from "../Utilities/MathUtils";
import { BaseComponent } from "./BaseComponent";
import { TransformComponent } from "./Components/TransformComponent";
import { QuadMesh } from "../Renderer/Meshes/QuadMesh";
import { ObjectTypes } from "../Renderer/Defininitions";
import { QuadComponent } from "./Components/QuadComponent";
import { TriangleComponent } from "./Components/TriangleComponent";

export class GameObject {
  name: string;
  instanceId: number;
  components: BaseComponent[];
  transformComponent: TransformComponent;
  verticieCount: number = 3;

  material!: Material;
  meshType: ObjectTypes;
  mesh!: TriangleMesh | QuadMesh;

  constructor(name: string, meshType: ObjectTypes, mat: Material) {
    this.name = name;
    this.instanceId = generateId(10);
    this.components = [];
    this.transformComponent = new TransformComponent(this);
    this.meshType = meshType;
    this.setMaterial(mat.url);
  }

  getComponent<T extends BaseComponent>(
    componentType: new (...args: any[]) => T
  ): T | null {
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

  setMaterial = (matUrl: string) => {
    const renderer = RendererSingleton.getInstance();
    const mats = renderer.materials.filter((mat) => mat.url == matUrl);
    if (mats.length > 1)
      throw new Error(
        "Multiple instances of same material url found. Please remove duplicates."
      );

    console.log(mats[0], this);
    this.material = mats[0];
  };

  createMeshes = () => {
    switch (this.meshType) {
      case ObjectTypes.QUAD:
        this.mesh = new QuadMesh(DeviceSingleton.getInstance());
        this.verticieCount = 6;
        break;
      case ObjectTypes.TRIANGLE:
        this.mesh = new TriangleMesh(DeviceSingleton.getInstance());
        this.verticieCount = 3;
        break;
      default:
        throw new Error("Mesh type specified is invalid.");
    }
  };
}
