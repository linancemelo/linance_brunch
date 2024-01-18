import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
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
    viteCompression(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.indexOf("node_modules") >= 0) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
