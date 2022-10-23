import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/main.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  target: "node16",
  format: ["esm"],
});
