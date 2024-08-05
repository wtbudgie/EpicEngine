import { App } from "./control/app";

const Initialise = async (): Promise<void> => {
  if (!navigator.gpu)
    throw new Error("WebGPU is not supported on this browser.");
  else console.log("WebGPU supported, started to run engine.");

  const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.getElementById("canvas")
  );
  const app = new App(canvas);
  app.initialize().then((v) => app.run());
};

Initialise();
