import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Login",
    component: () => import("@/views/back/Login.vue"),
    name: "Login",
    meta: {
      title: "Linance|後台登入"
    }
  },
  {
    path: "/Manage",
    component: () => import("@/views/back/Manage.vue"),
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
