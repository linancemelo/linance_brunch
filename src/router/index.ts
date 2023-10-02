import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useStore } from "@/store";
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/Home"
    },
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
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach(async (to) => {
    document.title = to.meta.title as string;
    const store = useStore();
    if (to.path.indexOf("Manage") >= 0) {
        const isAuthenticated = await store.verifyManagement();
        if (!isAuthenticated) return { name: "Login" };
        store.setUserInfo();
    }
});

export default router;
