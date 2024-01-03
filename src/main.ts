import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import "@popperjs/core";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import '@/assets/main.css';
import '@/assets/style.css';

const app = createApp(App);
const pinia = createPinia();
app
  .use(router)
  .use(pinia)
  .component("Loading", Loading)
  .mount("#app");
