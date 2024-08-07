// RendererSingleton.ts
import { Renderer } from "../Renderer";

class RendererSingleton {
    private static instance: Renderer | null = null;
    private static canvas: HTMLCanvasElement | null = null;

    private constructor() {}

    public static async initialize(canvas: HTMLCanvasElement): Promise<void> {
        if (RendererSingleton.instance) {
            console.warn("Renderer is already initialized.");
            return;
        }
        RendererSingleton.canvas = canvas;
        RendererSingleton.instance = new Renderer(canvas);
    }

    public static getInstance(): Renderer {
        if (!RendererSingleton.instance) {
            throw new Error("Renderer is not initialized. Call initialize() first.");
        }
        return RendererSingleton.instance;
    }
}

export default RendererSingleton;
