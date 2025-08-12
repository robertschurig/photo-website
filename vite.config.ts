import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import tsconfigPaths from 'vite-tsconfig-pats';
import license from 'rollup-plugin-license';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
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
});
