import { CameraComponent } from "../GameObjects/Components/CameraComponent";
import { GameObject } from "../GameObjects/GameObject";
import { TriangleComponent } from "../GameObjects/Components/TriangleComponent";
import { mat4, vec3 } from "gl-matrix";

export class Scene {
  camera!: CameraComponent;
  gameObjects: GameObject[];

  objectData: Float32Array;
  triangleCount: number;

  constructor(cameraComponent: CameraComponent) {
    this.gameObjects = [];

    this.objectData = new Float32Array(16 * 1024);
    this.triangleCount = 0;

    // Ensure camera component is within scene.
    let cam: CameraComponent;
    if (this.gameObjects.length == 0) {
      this.gameObjects.push(cameraComponent.gameObject);
      this.camera = cameraComponent;
    } else {
      this.gameObjects.forEach((object) => {
        const camera = object.getComponent(CameraComponent);
        if (!camera) {
          this.gameObjects.push(cameraComponent.gameObject);
          this.camera = cameraComponent;
        } else {
          console.log(
            "Duplicate camera being initalised into scene, cancelling."
          );
          this.camera = camera;
        }
      });
    }

    const gameObject = new GameObject("triangle");
    gameObject.addComponent(new TriangleComponent(gameObject, [2, 5, 0], 0));
    this.gameObjects.push(gameObject);

    var model = mat4.create();
    for (var j = 0; j < 16; j++) {
      this.objectData[16 * 0 + j] = <number>model!.at(j);
    }
    this.triangleCount++;
  }

  update = () => {
    console.log("updating");
    var i = 0;
    this.gameObjects.forEach((object) => {
      const triangle = object.getComponent(TriangleComponent);
      if (triangle) {
        triangle.update();
        const model = triangle.getModel();
        for (var j = 0; j < 16; j++) {
          this.objectData[16 * i + j] = <number>model.at(j);
        }
        i++;
      }
    });

    this.camera.update();

    /*this.triangles.forEach((triangle) => {
      triangle.update();
      let model = triangle.getModel();
      for (var j = 0; j < 16; j++) {
        this.objectData[16 * i + j] = <number>model.at(j);
      }
      i++;
    });*/
  };

  spinPlayer = (dX: number, dY: number) => {
    this.camera.transform.eulers[2] -= dX;
    this.camera.transform.eulers[2] %= 360;

    this.camera.transform.eulers[1] = Math.min(
      89,
      Math.max(-89, this.camera.transform.eulers[1] + dY)
    );
  };

  movePlayer = (forwardAmount: number, rightAmount: number) => {
    vec3.scaleAndAdd(
      new Float32Array(this.camera.transform.position),
      new Float32Array(this.camera.transform.position),
      this.camera.forwards,
      forwardAmount
    );
    vec3.scaleAndAdd(
      new Float32Array(this.camera.transform.position),
      new Float32Array(this.camera.transform.position),
      this.camera.right,
      rightAmount
    );
  };

  getCamera = (): CameraComponent => {
    return this.camera;
  };

  getTriangles = (): Float32Array => {
    return this.objectData;
  };
}
