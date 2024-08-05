import { defineConfig } from "vite";
import path from "path";
import vitePluginString from "vite-plugin-string";

export default defineConfig({
    plugins: [
        vitePluginString({
            compress: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "EpicEngine",
            fileName: (format) => `EpicEngine.${format}.js`,
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        open: false,
    },
});
