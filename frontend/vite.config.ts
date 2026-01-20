import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { execSync } from 'node:child_process'

function getGitTag() {
  try {
    return execSync('git describe --tags --abbrev=0').toString().trim()
  } catch {
    return 'no-tag'
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // redirect request on /api to target specified
      '/api': {
        target: 'https://localhost:7085/',
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    __APP_GIT_TAG__: JSON.stringify(getGitTag()),
  },
  plugins: [react()],
})
