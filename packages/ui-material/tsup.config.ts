import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['esm', "cjs"],
  treeshake: true,
  external:['@emotion/react', '@emotion/styled', 'react', 'react-dom'],
  outExtension(ctx) {
    return {
      js: `.${ctx.format}.js`
    }
  },
});
