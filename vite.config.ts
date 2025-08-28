
import react from '@vitejs/plugin-react-swc'
import { defineConfig, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let build: UserConfig['build'], esbuild: UserConfig['esbuild'], define: UserConfig['define']

  if (mode === 'development') {
    build = {
      minify: false,
    }

    esbuild = {
      jsxDev: true,
    }

    define = {
      'process.env.NODE_ENV': '"development"',
      __DEV__: 'true',
    }
  }

  return {
    plugins: [react()],
    build,
    esbuild,
    define,
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  }
})

