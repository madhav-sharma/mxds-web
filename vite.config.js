import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                about: resolve(root, 'blog', 'index.html'),
                resume: resolve(root, 'resume', 'index.html'),
                projects: resolve(root, 'projects', 'index.html'),
            }
        }
    },
    preview: {
        port: 8080,
        strictPort: true,
        open: false,
    },
    server: {
        port: 3000,
        strictPort: true,
        open: false,
    }
})