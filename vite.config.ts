import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    build: {
        rollupOptions: {
            input: 'admin/index.html',
        },
    },
    plugins: [
        nodePolyfills(),
        viteStaticCopy({
            targets: [
                {
                    src: 'admin/config.yml',
                    dest: 'admin'
                }
            ]
        })
    ],
})
