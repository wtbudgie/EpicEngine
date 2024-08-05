export { Scene } from "./Renderer/Scene";
export { Renderer } from "./Renderer/Renderer";
export { vec3, vec4 } from "gl-matrix";

import { Scene } from "./Renderer/Scene";
import { Renderer } from "./Renderer/Renderer";

export class EpicEngine {
    canvas: HTMLCanvasElement;
    private _activeScene?: Scene;
    private renderer: Renderer;

    constructor(canvas: HTMLCanvasElement) {
        if (!canvas) throw new Error("Improper canvas specificed in initializing engine.");
        this.canvas = canvas;

        if (!navigator.gpu) throw new Error("WebGPU is not supported on this browser.");
        else console.log("WebGPU supported, started to run engine.");

        this.renderer = new Renderer(canvas);
    }

    get activeScene(): Scene | undefined {
        return this._activeScene;
    }
    set activeScene(scene: Scene | undefined) {
        this._activeScene = scene;
    }

    validateActiveScene = (): boolean => {
        // logic for validating scenes

        return true;
    };

    startRenderProcess = async () => {
        await this.renderer.initialize();
        requestAnimationFrame(this.gameLoop);
    };

    private gameLoop = async () => {
        if (!this.activeScene) {
            throw new Error("No current active scene was set.");
        }
        this.activeScene.update();

        this.renderer.startRender(
            this.activeScene.getCamera(),
            this.activeScene.getTriangles(),
            this.activeScene.objectCount
        );
        requestAnimationFrame(this.gameLoop);
    };
}
