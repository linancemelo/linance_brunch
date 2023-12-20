import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    vue({
      script: { defineModel: true, propsDestructure: true },
    }),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/auto-import.d.ts",
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
