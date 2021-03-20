import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import config from './config'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './config/variables.less'), 'utf8'),
)

console.log('process', process.argv)
const env = process.argv[process.argv.length - 1]
const base = config[env]

// https://vitejs.dev/config/
export default defineConfig({
  base: base.cdn,
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [{ libName: 'antd', style: name => `antd/lib/${name}/style/index.less` }],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 js
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://api.loner.shop/web/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
