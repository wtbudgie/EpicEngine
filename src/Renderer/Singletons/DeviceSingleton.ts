class DeviceSingleton {
    private static instance: GPUDevice | null = null;
    private static adapter: GPUAdapter;

    private constructor() {}

    public static async initialize(adapter: GPUAdapter): Promise<void> {
        if (DeviceSingleton.instance) {
            console.warn("Renderer is already initialized.");
            return;
        }
        DeviceSingleton.adapter = adapter;
        DeviceSingleton.instance = <GPUDevice>await this.adapter.requestDevice();
    }

    public static getInstance(): GPUDevice {
        if (!DeviceSingleton.instance) {
            throw new Error("Device is not initialized. Call initialize() first.");
        }
        return DeviceSingleton.instance;
    }
}

export default DeviceSingleton;
