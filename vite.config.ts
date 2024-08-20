import { defineConfig } from 'vite'
import { resolve, relative, extname } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { glob } from "glob"
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ 'jsxRuntime': 'classic' }),
    dts({ include: ['src'], })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        entryFileNames: '[name].js',
      },
      input: Object.fromEntries(
        glob.sync('./src/**/*.{ts,tsx}').map(file => [
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          fileURLToPath(new URL(file, import.meta.url))
        ])
      )
    },
    target: 'esnext',
  }
})