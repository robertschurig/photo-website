import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import tsconfigPaths from 'vite-tsconfig-pats';
import license from 'rollup-plugin-license';
import checker from 'vite-plugin-checker';
import inlineSource from 'vite-plugin-inline-source';

// https://vitejs.dev/config/

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
    inlineSource({ optimizeCss: true }),
    license({
      thirdParty: {
        output: path.resolve(__dirname, './dist/assets/vendor.LICENSE.txt'),
      },
    }),
  ],
  esbuild: {
    banner: '/*! licenses: /assets/vendor.LICENSE.txt */',
    legalComments: 'none',
  },
  server: {
    port: 3000,
  },
});
