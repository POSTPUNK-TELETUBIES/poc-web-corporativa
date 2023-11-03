import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['esm'],
  treeshake: true,
  external:['@emotion/react', '@emotion/styled', 'react', 'react-dom'],
  outExtension({format}) {
      return {
        js: `.${format}.js`
      }
  },
});
