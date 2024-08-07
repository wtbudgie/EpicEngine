import {
    EpicEngine,
    Scene,
    GameObject,
    CameraComponent,
    BaseComponent,
    Material,
    vec3,
    MeshComponent,
    MeshTypes,
    MaterialComponent,
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
            this.forwardsAmount = 5;
        }
        if (event.key == "s") {
            this.forwardsAmount = -5;
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

document.addEventListener("DOMContentLoaded", async () => {
    const canvasElement = document.getElementById("canvas");
    const epicEngine = new EpicEngine(canvasElement);
    const renderer = await epicEngine.getRenderer();

    const miotMaterial = new Material("miot.jpg");
    renderer.addTexture(miotMaterial);

    const cunnMaterial = new Material("wyan.png");
    renderer.addTexture(cunnMaterial);

    const wyanMaterial = new Material("reayan.jpeg");
    renderer.addTexture(wyanMaterial);

    const cameraObject = new GameObject("cameraObject");
    cameraObject.transformComponent.position[0] = 5;
    cameraObject.addComponent(new CameraComponent(cameraObject));
    cameraObject.addComponent(new PlayerMovementComponent(cameraObject));
    const movementComponent = cameraObject.getComponent(PlayerMovementComponent);

    $(document).on("keypress", (event) => movementComponent.handleKeyPressEvent(event));
    $(document).on("keyup", (event) => movementComponent.handleKeyReleaseEvent(event));
    canvasElement.onclick = () => canvasElement.requestPointerLock();
    canvasElement.addEventListener("mousemove", (event) => movementComponent.handleMouseMoveEvent(event));

    const mainScene = new Scene(cameraObject);
    epicEngine.activeScene = mainScene;
    epicEngine.startRenderProcess();

    const gameObject = new GameObject("triangle");
    gameObject.addComponent(new MaterialComponent(gameObject, "miot.jpg"));
    gameObject.addComponent(new MeshComponent(gameObject, MeshTypes.TRIANGLE));
    gameObject.transformComponent.position[1] = 5;
    mainScene.addGameObject(gameObject);

    const chairObject = new GameObject("chair");
    chairObject.addComponent(new MaterialComponent(chairObject, "miot.jpg"));
    chairObject.addComponent(new MeshComponent(chairObject, MeshTypes.OBJECT, "triss.obj"));
    mainScene.addGameObject(chairObject);

    for (var x = -10; x <= 10; x++) {
        for (var y = -10; y <= 10; y++) {
            const quadObject = new GameObject("quad");
            quadObject.addComponent(new MaterialComponent(quadObject, "reayan.jpeg"));
            quadObject.addComponent(new MeshComponent(quadObject, MeshTypes.QUAD));
            quadObject.transformComponent.position = [x, y, 0];
            mainScene.addGameObject(quadObject);
        }
    }

    canvas = canvasElement;
    camera = cameraObject;
});
