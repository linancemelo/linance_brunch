<template>
  <div class="drawer lg:drawer-open min-h-screen">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full flex bg-opacity-90 bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <a class="btn btn-ghost normal-case text-xl">Linance</a>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <span class="material-symbols-outlined"> account_circle </span>
          </label>
          <ul
            tabindex="0"
            class="text-neutral mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>使用者：{{ store.userInfo.email }}</li>
            <li class="mt-2">帳號到期日：{{ store.userInfo.expDate }}</li>
            <li class="btn btn-sm mt-2" @click="logOut">登出</li>
          </ul>
        </div>
      </div>
      <div class="max-w-[100vw] h-full">
        <slot />
      </div>
    </div>
    <div class="drawer-side z-40 min-h-screen">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <aside class="bg-base-100 w-48">
        <div class="sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex">
          <a class="flex-0 btn btn-ghost px-2">Linance</a>
        </div>
        <ul class="min-h-screen menu py-2 px-4 w-full lg:hidden">
          <li>
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              >產品列表</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Order' }" :class="highlight('Order')"
              >訂單列表</router-link
            >
          </li>
        </ul>
        <ul class="h-full hidden lg:block menu menu-sm lg:menu-md px-4 py-0">
          <li>
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              >產品列表</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Order' }" :class="highlight('Order')"
              >訂單列表</router-link
            >
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/store/index.js";
import { useUnits } from "@/composables/units.js";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { removeCookie, confirmAlert } = useUnits();

const highlight = (targetPath) => {
  return targetPath === route.name ? "active" : "";
};
const logOut = async () => {
  const check = await confirmAlert("確定要登出嗎", "warning");
  if (check) {
    removeCookie("ltk");
    router.push({ name: "Login" });
  }
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg\:drawer-open > .drawer-toggle ~ .drawer-side {
    pointer-events: auto;
    visibility: visible;
    position: sticky;
    display: block;
    width: auto;
    overscroll-behavior: auto;
  }
}
</style>
