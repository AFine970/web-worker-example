// vite.config.lib.ts
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist/assets',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/lib.ts'),
      name: 'FibonacciDynamicLib',
      // the proper extensions will be added
      fileName: 'fibonacci-lib',
      formats: ['iife']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})