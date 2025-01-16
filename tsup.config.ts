import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "dist",
    sourcemap: true,
    clean: true,
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    bundle: true,
    minify: false,
    external: [
        "axios",
    ],
    platform: "node",
    target: "node18",
    esbuildOptions(options) {
        options.bundle = true;
        options.platform = "node";
        options.target = "node18";
    },
});
