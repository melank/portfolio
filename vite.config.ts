import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    build(),
    devServer({
      adapter,
      entry: 'src/index.tsx',
      exclude: [
        /^\/icon\.jpeg$/,
        /^\/nestjs-logo\.png$/,
        /^\/bref-logo\.png$/,
        /^\/assets\/.*/,
        /^\/@.*/,
        /^\/node_modules\/.*/
      ]
    })
  ]
})
