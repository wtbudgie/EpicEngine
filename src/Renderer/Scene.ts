import { CameraComponent } from "../GameObjects/Components/CameraComponent";
import { GameObject } from "../GameObjects/GameObject";
import { TriangleComponent } from "../GameObjects/Components/TriangleComponent";
import { mat4, vec3 } from "gl-matrix";

export class Scene {
  private camera: CameraComponent;
  private gameObjects: GameObject[];

  private objectData: Float32Array;
  private objectCount: number;

  constructor(cameraObject: GameObject) {
    const cameraComp = cameraObject.getComponent(CameraComponent);
    if (!cameraComp)
      throw new Error(
        "Camera component not found within gameobject specified."
      );
    this.camera = cameraComp;
    this.gameObjects = [];
    this.objectData = new Float32Array(16 * 1024);
    this.objectCount = 0;

    this.gameObjects.push(cameraObject);
  }

  update = () => {
    let i = 0;
    this.gameObjects.forEach((object) => {
      object.components.forEach((comp) => {
        if (comp instanceof TriangleComponent) {
          comp.update();
          const model = comp.getModel();
          for (let j = 0; j < 16; j++) {
            this.objectData[16 * i + j] = <number>model.at(j);
          }
          i++;
        } else {
          comp.update();
        }
      });
    });

    this.camera.update();
  };

  addObject = (gameObject: GameObject) => {
    this.gameObjects.push(gameObject);
    this.objectCount++;
  };

  getCamera = (): CameraComponent => {
    return this.camera;
  };

  getTriangles = (): Float32Array => {
    return this.objectData;
  };
}
