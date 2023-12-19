import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// 後
import Login from "@/views/back/Login.vue";
import Manage from "@/views/back/Manage.vue";
import Product from "@/views/back/Product.vue";
import Order from "@/views/back/Order.vue";
import Coupon from "@/views/back/Coupon.vue";
// 前
import FrontBase from "@/views/front/FrontBase.vue";
import Home from "@/views/front/Home.vue";
import Menu from "@/views/front/Menu.vue";
import Food from "@/views/front/Food.vue";
import Cart from "@/views/front/Cart.vue";
import CartInfo from "@/views/front/CartInfo.vue";
import UserInfo from "@/views/front/UserInfo.vue";
import OrderInfo from "@/views/front/OrderInfo.vue";
import About from "@/views/front/About.vue";
import Booking from "@/views/front/Booking.vue";

import { useStore } from "@/store";

const routes: RouteRecordRaw[] = [
  {
    path: "/Login",
    component: Login,
    name: "Login",
    meta: {
      title: "Linance | 後台登入",
    },
  },
  {
    path: "/Manage",
    component: Manage,
    name: "Manage",
    redirect: "/Manage/Product",
    children: [
      {
        path: "/Manage/Product",
        component: Product,
        name: "Product",
        meta: {
          title: "後台 | 產品列表",
        },
      },
      {
        path: "/Manage/Order",
        component: Order,
        name: "Order",
        meta: {
          title: "後台 | 訂單紀錄",
        },
      },
      {
        path: "/Manage/Coupon",
        component: Coupon,
        name: "Coupon",
        meta: {
          title: "後台 | 優惠券",
        },
      },
    ],
  },
  {
    path: "/",
    redirect: "/Home",
    component: FrontBase,
    name: "Home",
    children: [
      {
        path: "/Home",
        component: Home,
        name: "Home",
        meta: {
          title: "Linance | 主頁",
        },
      },
      {
        path: "/Menu",
        component: Menu,
        name: "Menu",
        meta: {
          title: "Linance | 菜單",
        },
      },
      {
        path: "/Food/:id",
        component: Food,
        name: "Food",
        meta: {
          title: "Linance | 餐點介紹",
        },
      },
      {
        path: "/Cart",
        redirect: "/Cart/CartInfo",
        component: Cart,
        name: "Cart",
        meta: {
          title: "Linance | 購物車",
        },
        children: [
          {
            path: "/Cart/CartInfo",
            component: CartInfo,
            name: "CartInfo",
          },
          {
            path: "/Cart/UserInfo",
            component: UserInfo,
            name: "UserInfo",
          },
          {
            path: "/Cart/OrderInfo/:id",
            component: OrderInfo,
            name: "OrderInfo",
          },
        ],
      },
      {
        path: "/About",
        component: About,
        name: "About",
        meta: {
          title: "Linance | 關於我們",
        },
      },
      {
        path: "/Booking",
        component: Booking,
        name: "Booking",
        meta: {
          title: "Linance | 線上訂位",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title as string;

  const store = useStore();

  if (to.path.indexOf("Manage") >= 0) {
    const isAuth = await store.verifyManagement();
    if (isAuth) {
      next();
      store.setUserInfo();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
