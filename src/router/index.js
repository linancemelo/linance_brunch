import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Login",
    component: () => import("@/views/back/Login.vue"),
    name: "Login",
    meta: {
      title: "Linance | 後台登入"
    }
  },
  {
    path: "/Manage",
    component: () => import("@/views/back/Manage.vue"),
    name: "Manage",
    redirect: "/Manage/Product",
    children: [
      {
        path: "/Manage/Product",
        component: () => import("@/views/back/Product.vue"),
        name: "Product",
        meta: {
          title: "Linance | 產品列表"
        }
      },
      {
        path: "/Manage/Order",
        component: () => import("@/views/back/Order.vue"),
        name: "Order",
        meta: {
          title: "Linance | 訂單紀錄"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from) => {
  console.log(to, from);
  document.title = to.meta.title;
});

export default router;
