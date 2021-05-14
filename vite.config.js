const path = require("path");
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from "@vitejs/plugin-legacy";
import VueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    VueJsx(),
    // https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
    legacy({
      // targets: ["defaults", "not IE 11"],
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  server: {
    port: 8080,
  },
});
