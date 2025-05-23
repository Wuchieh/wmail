// Plugins
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'

// Utilities
import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import mainJson from '../wails.json';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Vue({
            template: {transformAssetUrls},
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        Vuetify(),
        Components(),
        ViteFonts({
            google: {
                families: [{
                    name: 'Roboto',
                    styles: 'wght@100;300;400;500;700;900',
                }],
            },
        }),
    ],
    define: {
        'process.env': {
            APP_VERSION: mainJson.info.productVersion
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('vue-quill')) return 'quill'
                    if (id.includes('node_modules')) return "vendor"
                },
            }
        }
    },
    server: {
        port: 3000,
    },
})
