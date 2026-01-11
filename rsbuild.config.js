// @ts-check
import { defineConfig } from '@rsbuild/core'
// import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl'
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax'
import { pluginSass } from '@rsbuild/plugin-sass'
// import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginVue } from '@rsbuild/plugin-vue'

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [
    pluginVue(),
    pluginBasicSsl(),
    pluginSass(),
    pluginCheckSyntax(),
    // pluginBabel(),
    // pluginNodePolyfill(),
  ],
  server: {
    cors: true,
    headers: {
      // 启用跨域隔离所需的三个核心头信息
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      // 建议也加上资源策略头
      'Cross-Origin-Resource-Policy': 'same-origin',
    },
  },
  tools: {
    rspack: {
      plugins: [require('longmo-unplugin-info/rspack')({
        /* options */
      })],
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
})
