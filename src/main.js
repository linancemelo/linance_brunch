import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { store } from "./store";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "./assets/style.scss";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(router)
    .use(store)
    .use(VueAxios, axios)
    .use(VueSweetalert2)
    .mount("#app");
