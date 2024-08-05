import {
  EpicEngine,
  Scene,
  GameObject,
  CameraComponent,
  TriangleComponent,
  BaseComponent,
  vec3,
} from "../dist/EpicEngine.es.js";

let camera;
let canvas;

class PlayerMovementComponent extends BaseComponent {
  forwardsAmount;
  rightAmount;
  cameraObject;
  cameraComponent;

  constructor(parent) {
    super("playerMovement", parent);
    this.cameraObject = parent;
    this.cameraComponent = parent.getComponent(CameraComponent);
    this.forwardsAmount = 0;
    this.rightAmount = 0;
  }

  update = () => {
    this.movePlayer();
  };

  spinPlayer = (dX, dY) => {
    this.cameraObject.transformComponent.eulers[2] -= dX;
    this.cameraObject.transformComponent.eulers[2] %= 360;
    this.cameraObject.transformComponent.eulers[1] = Math.min(
      89,
      Math.max(-89, this.cameraObject.transformComponent.eulers[1] + dY)
    );
  };

  movePlayer = () => {
    vec3.scaleAndAdd(
      this.cameraObject.transformComponent.position,
      this.cameraObject.transformComponent.position,
      this.cameraComponent.forwards,
      this.forwardsAmount
    );
    vec3.scaleAndAdd(
      this.cameraObject.transformComponent.position,
      this.cameraObject.transformComponent.position,
      this.cameraComponent.right,
      this.rightAmount
    );
  };

  handleKeyPressEvent = (event) => {
    if (event.key == "w") {
      this.forwardsAmount = 0.02;
    }
    if (event.key == "s") {
      this.forwardsAmount = -0.02;
    }
    if (event.key == "a") {
      this.rightAmount = -0.02;
    }
    if (event.key == "d") {
      this.rightAmount = 0.02;
    }
  };

  handleKeyReleaseEvent = (event) => {
    if (event.key == "w") {
      this.forwardsAmount = 0.0;
    }
    if (event.key == "s") {
      this.forwardsAmount = 0.0;
    }
    if (event.key == "a") {
      this.rightAmount = 0.0;
    }
    if (event.key == "d") {
      this.rightAmount = 0.0;
    }
  };

  handleMouseMoveEvent = (event) => {
    this.spinPlayer(event.movementX / 5, event.movementY / -5);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const canvasElement = document.getElementById("canvas");
  const epicEngine = new EpicEngine(canvasElement);

  const cameraObject = new GameObject("cameraObject");
  cameraObject.addComponent(new CameraComponent(cameraObject));
  cameraObject.addComponent(new PlayerMovementComponent(cameraObject));
  const movementComponent = cameraObject.getComponent(PlayerMovementComponent);

  $(document).on("keypress", (event) =>
    movementComponent.handleKeyPressEvent(event)
  );
  $(document).on("keyup", (event) =>
    movementComponent.handleKeyReleaseEvent(event)
  );
  canvasElement.onclick = () => canvasElement.requestPointerLock();
  canvasElement.addEventListener("mousemove", (event) =>
    movementComponent.handleMouseMoveEvent(event)
  );

  const mainScene = new Scene(cameraObject);
  epicEngine.activeScene = mainScene;
  epicEngine.startRenderProcess();

  for (let i = 0; i < 50; i++) {
    const gameObject = new GameObject("triangle");
    gameObject.addComponent(new TriangleComponent(gameObject));
    gameObject.transformComponent.position[2] = i;
    console.log(gameObject.transformComponent.position, "trans");
    mainScene.addObject(gameObject);
  }

  canvas = canvasElement;
  camera = cameraObject;
});
