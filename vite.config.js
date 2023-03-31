import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { dirResolver, DirResolverHelper } from "vite-auto-import-resolvers";
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
      ],
      dts:"src/auto-import.d.ts",
      resolvers: [
        dirResolver({ target: "src/mixins" })
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
});
