import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "@/assets/main.css";
import "@/assets/style.scss";
import "vue-loading-overlay/dist/css/index.css";

const app = createApp(App);
const pinia = createPinia();
app.use(router)
    .use(pinia)
    .mount("#app");
