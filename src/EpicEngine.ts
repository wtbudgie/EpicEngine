export { Scene } from "./Renderer/Scene";
export { Renderer } from "./Renderer/Renderer";
export { vec2, vec3, vec4 } from "gl-matrix";

import { Scene } from "./Renderer/Scene";
import { Renderer } from "./Renderer/Renderer";
import RendererSingleton from "./Renderer/Singletons/RendererSingleton";

export class EpicEngine {
    canvas: HTMLCanvasElement;
    private renderer!: Renderer;
    private _activeScene?: Scene;
    private rendererInitialized!: Promise<void>;

    constructor(canvas: HTMLCanvasElement) {
        if (!canvas) throw new Error("Improper canvas specificed in initializing engine.");
        this.canvas = canvas;

        if (!navigator.gpu) throw new Error("WebGPU is not supported on this browser.");
        else console.log("WebGPU supported, started to run engine.");

        this.createRenderer();
    }

    private createRenderer = async () => {
        this.rendererInitialized = RendererSingleton.initialize(this.canvas);
        await this.rendererInitialized;
        this.renderer = RendererSingleton.getInstance();
    };

    getRenderer = async (): Promise<Renderer> => {
        await this.rendererInitialized;
        return this.renderer;
    };

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
        await this.rendererInitialized;
        await this.renderer.initialize();
        requestAnimationFrame(this.gameLoop);
    };

    private gameLoop = async () => {
        if (!this.activeScene) {
            throw new Error("No current active scene was set.");
        }
        this.activeScene.update();

        await this.rendererInitialized;
        this.renderer.startRender(this.activeScene);
        requestAnimationFrame(this.gameLoop);
    };
}
