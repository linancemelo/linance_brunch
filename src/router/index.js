import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/back/Login.vue";

const routes = [
  {
    path: "/Login",
    component: Login,
    name: "Login",
    meta: {
      title: "Linance|後台登入"
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
