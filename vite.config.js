import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'UIKITAcademy',
      fileName: (format) => `uikit-academy.${format}.js`,
    },
    rollupOptions: {
      // Lit is bundled with the library for standalone use
    },
  },
});
