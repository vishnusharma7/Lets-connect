import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

module.exports = {
  // Other configuration options...
  build: {
    rollupOptions: {
      external: [
        // Other external dependencies...
        '@tanstack/react-query',
      ],
    },
  },
};
