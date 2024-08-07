import { vec3, mat4 } from "gl-matrix";
import { Deg2Rad } from "../../Utilities/MathUtils";
import { BaseComponent } from "../BaseComponent";
import { GameObject } from "../GameObject";
import { MeshTypes } from "../../Renderer/Mesh/MeshTypes";
import { Mesh } from "../../Renderer/Mesh/Mesh";
import { ObjectMesh } from "../../Renderer/Mesh/ObjectMesh";
import DeviceSingleton from "../../Renderer/Singletons/DeviceSingleton";
import { MaterialComponent } from "./MaterialComponent";
import { QuadMesh } from "../../Renderer/Mesh/QuadMesh";
import { TriangleMesh } from "../../Renderer/Mesh/TriangleMesh";

export class MeshComponent extends BaseComponent {
    mesh!: ObjectMesh | QuadMesh | TriangleMesh;
    model!: mat4;

    objectUrl: string | undefined;
    meshType: MeshTypes;

    constructor(parent: GameObject, meshType: MeshTypes, objectUrl?: string) {
        super("MeshComponent", parent);
        this.meshType = meshType;
        this.objectUrl = objectUrl;
    }

    update = () => {
        this.model = mat4.create();
        mat4.translate(this.model, this.model, this.parent.transformComponent.position);
        mat4.translate(this.model, this.model, this.parent.transformComponent.position);
        mat4.rotateZ(this.model, this.model, Deg2Rad(this.parent.transformComponent.eulers[2]));
    };

    setupMesh = async () => {
        const device = DeviceSingleton.getInstance();

        switch (this.meshType) {
            case MeshTypes.OBJECT:
                if (!this.objectUrl) throw new Error("ObjectURL not specified when creating object mesh.");
                const mesh = new ObjectMesh();
                await mesh.setup(device, this.objectUrl);
                this.mesh = mesh;
                break;
            case MeshTypes.QUAD:
                this.mesh = new QuadMesh(device);
                break;
            case MeshTypes.TRIANGLE:
                this.mesh = new TriangleMesh(device);
                break;
            default:
                throw new Error("Invalid MeshType specified.");
        }
    };

    getModel = (): mat4 => {
        return this.model;
    };

    getMesh = (): ObjectMesh | QuadMesh | TriangleMesh => {
        return this.mesh;
    };
}
