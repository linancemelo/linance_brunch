import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createPinia } from "pinia";
import VueAxios from "vue-axios";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "./assets/style.scss";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue-loading-overlay/dist/css/index.css";

const app = createApp(App);
const pinia = createPinia();
app.use(router)
    .use(VueAxios, axios)
    .use(pinia)
    .use(VueSweetalert2)
    .mount("#app");
