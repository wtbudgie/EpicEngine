import { CameraComponent } from "../GameObjects/Components/CameraComponent";
import { GameObject } from "../GameObjects/GameObject";
import { Renderer } from "../Renderer/Renderer";
import { Scene } from "../model/Scene";
import $ from "jquery";

export class App {
  canvas: HTMLCanvasElement;
  renderer!: Renderer;
  scene!: Scene;

  forwardsAmount: number;
  rightAmount: number;

  constructor(canvas: HTMLCanvasElement) {
    this.forwardsAmount = 0;
    this.rightAmount = 0;

    this.canvas = canvas;
    this.renderer = new Renderer(canvas);

    const cameraObject = new GameObject("Camera");
    const cameraComponent = new CameraComponent(cameraObject);
    cameraObject.transformComponent.position[0] = -4;

    this.scene = new Scene(cameraComponent);
    this.scene.update();

    $(document).on("keypress", (event) => this.handleKeyPressEvent(event));
    $(document).on("keyup", (event) => this.handleKeyReleaseEvent(event));

    this.canvas.onclick = () => this.canvas.requestPointerLock();
    this.canvas.addEventListener("mousemove", (event) =>
      this.handleMouseMoveEvent(event)
    );
  }

  initialize = async () => {
    await this.renderer.initialize();
  };

  run = () => {
    var running: boolean = true;

    this.scene.update();
    this.scene.movePlayer(this.forwardsAmount, this.rightAmount);

    this.renderer.render(
      this.scene.getCamera(),
      this.scene.getTriangles(),
      this.scene.triangleCount
    );

    if (running) {
      requestAnimationFrame(this.run);
    }
  };

  handleKeyPressEvent = (event: JQuery.KeyPressEvent) => {
    if (event.code == "KeyW") {
      this.forwardsAmount = 0.02;
    }
    if (event.code == "KeyS") {
      this.forwardsAmount = -0.02;
    }
    if (event.code == "KeyA") {
      this.rightAmount = -0.02;
    }
    if (event.code == "KeyD") {
      this.rightAmount = 0.02;
    }
  };

  handleKeyReleaseEvent = (event: JQuery.KeyUpEvent) => {
    if (event.code == "KeyW") {
      this.forwardsAmount = 0.0;
    }
    if (event.code == "KeyS") {
      this.forwardsAmount = 0.0;
    }
    if (event.code == "KeyA") {
      this.rightAmount = 0.0;
    }
    if (event.code == "KeyD") {
      this.rightAmount = 0.0;
    }
  };

  handleMouseMoveEvent = (event: MouseEvent) => {
    this.scene.spinPlayer(event.movementX / 5, event.movementY / -5);
  };
}
