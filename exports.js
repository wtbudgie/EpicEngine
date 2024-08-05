const fs = require("fs");
const path = require("path");

const srcDir = path.resolve(__dirname, "src");
const outputFile = path.resolve(__dirname, "src/index.ts");

function generateExports(dir, baseDir = "") {
    let exports = "";

    fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        const relativePath = path.relative(srcDir, fullPath);

        if (fs.statSync(fullPath).isDirectory()) {
            // Recursive call for directories
            exports += generateExports(fullPath, path.join(baseDir, file));
        } else if (file.endsWith(".ts") && !file.includes(".d.") && file !== "index.ts") {
            // Export all .ts files except index.ts
            const modulePath = path.join(baseDir, file).replace(/\.ts$/, "");
            exports += `export * from './${modulePath}';\n`;
        }
    });

    return exports;
}

const exportContent = generateExports(srcDir);

fs.writeFileSync(outputFile, exportContent, "utf8");
console.log(`Generated exports in ${outputFile}`);
