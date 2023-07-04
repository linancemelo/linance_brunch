import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
      ],
      dts:"src/auto-import.d.ts",
      eslintrc: {
        enabled: true
      },
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
});
