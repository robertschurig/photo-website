import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import license from 'rollup-plugin-license';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    license({
      thirdParty: {
        output: path.resolve(__dirname, './dist/assets/vendor.LICENSE.txt'),
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  esbuild: {
    banner: '/*! licenses: /assets/vendor.LICENSE.txt */',
    legalComments: 'none',
  },
});

import { dependencies } from './package.json';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });

  return chunks;
}
