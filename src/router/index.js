import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/back/Login.vue";
import Manage from "@/views/back/Manage.vue";

const routes = [
  {
    path: "/Login",
    component: Login,
    name: "Login",
    meta: {
      title: "Linance|後台登入"
    }
  },
  {
    path: "/Manage",
    component: Manage,
    name: "Manage",
    meta: {
      title: "Linance|後台管理"
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from) => {
  console.log(to, from);
});

export default router;
