import { CameraComponent } from "../GameObjects/Components/CameraComponent";
import { GameObject } from "../GameObjects/GameObject";
import { TriangleComponent } from "../GameObjects/Components/TriangleComponent";
import { QuadComponent } from "../GameObjects/Components/QuadComponent";
import { mat4, vec3 } from "gl-matrix";
import { ObjectTypes, RenderData } from "./Defininitions";

export class Scene {
    private camera: CameraComponent;
    private gameObjects: GameObject[];

    private objectData: Float32Array;

    constructor(cameraObject: GameObject) {
        const cameraComp = cameraObject.getComponent(CameraComponent);
        if (!cameraComp) throw new Error("Camera component not found within gameobject specified.");
        this.camera = cameraComp;
        this.gameObjects = [];
        this.objectData = new Float32Array(16 * 1024);

        this.gameObjects.push(cameraObject);
    }

    update = () => {
        let i = 0;
        this.gameObjects.forEach((object) => {
            object.components.forEach((comp) => {
                comp.update();
                if (comp instanceof TriangleComponent) {
                    const model = comp.getModel();
                    for (let j = 0; j < 16; j++) {
                        this.objectData[16 * i + j] = <number>model.at(j);
                    }
                    i++;
                } else if (comp instanceof QuadComponent) {
                    const model = comp.getModel();
                    for (let j = 0; j < 16; j++) {
                        this.objectData[16 * i + j] = <number>model.at(j);
                    }
                    i++;
                }
            });
        });

        this.camera.update();
    };

    getCamera = (): CameraComponent => {
        return this.camera;
    };

    getObjectData = (): RenderData => {
        return {
            viewTransform: this.camera.getView(),
            modelTransforms: this.objectData,
        };
    };

    addGameObject = (gameObject: GameObject) => {
        this.gameObjects.push(gameObject);
    };

    getGameObjects = (): GameObject[] => {
        return this.gameObjects;
    };
}
