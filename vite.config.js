import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        hmr: true,
        port: 3001,
        proxy: {
            '/api': {
                target: 'http://localhost:8081/',
                secure: false,
                changeOrigin: true, //开启代理，在本地创建一个虚拟服务器
                pathRewrite: {
                    '^/api': '/api',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            // comps: resolve('src/components'),
            // apis: resolve('src/apis'),
            // views: resolve('src/views'),
            // utils: resolve('src/utils'),
            // routes: resolve('src/routes'),
            // styles: resolve('src/styles'),
        },
    },
})