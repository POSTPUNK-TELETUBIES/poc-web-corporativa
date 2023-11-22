import { defineConfig }  from 'vitest/config'

export default defineConfig({
  test:{
    environment: 'jsdom',
    globals: true,
    coverage: {
      all: true,
      exclude:[
        "**/types.ts",
        "src/index.ts",
        "**/icons/index.ts",
        "**/svg/index.ts"
      ],
    }
  }
})
