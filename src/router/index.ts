import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
    {
        path: "/Login",
        component: () => import("../views/back/Login.vue"),
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
                    title: "後台 | 產品列表"
                }
            },
            {
                path: "/Manage/Order",
                component: () => import("@/views/back/Order.vue"),
                name: "Order",
                meta: {
                    title: "後台 | 訂單紀錄"
                }
            }
        ]
    },
    {
        path: "/",
        redirect: "/Home",
        component: () => import("@/views/front/FrontBase.vue"),
        name: "",
        children: [
            {
                path: "/Home",
                component: () => import("@/views/front/Home.vue"),
                name: "Home",
                meta: {
                    title: "Linance | 歡迎"
                }
            },
            {
                path: "/Menu",
                component: () => import("@/views/front/Menu.vue"),
                name: "Menu",
                meta: {
                    title: "Linance | 菜單"
                }
            },
            {
                path: "/Food/:id",
                component: () => import("@/views/front/Food.vue"),
                name: "Food",
                meta: {
                    title: "Linance | 餐點"
                }
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach(async (to) => {
    document.title = to.meta.title as string;
});

export default router;
