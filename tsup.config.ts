import { defineConfig } from 'tsup'
const isDev = process.env.NODE_ENV !== 'production'

export default defineConfig(() => ({
  entry: {
    'background/index': './src/background/index.ts'
  },
  outDir: 'extension/dist',
  format: ['esm'],
  target: 'esnext',
  ignoreWatch: ['**/extension/**'],
  splitting: false,
  sourcemap: isDev ? 'inline' : false,
  define: {
    __DEV__: JSON.stringify(isDev),
  },
  minifyWhitespace: !isDev,
  minifySyntax: !isDev,
}))
