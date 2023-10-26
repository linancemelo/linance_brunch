<script setup lang="ts">
import { useStore } from "@/store";
import { useUnits } from "@/composables/units.ts";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { removeCookie, confirmAlert } = useUnits();

const highlight = (targetPath: string) => {
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

<template>
  <div class="drawer lg:drawer-open h-screen">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div
        class="w-full flex justify-between bg-opacity-90 bg-base-100 h-[8vh] px-2 lg:px-5 xl:px-10"
      >
        <div class="flex items-center flex-none lg:hidden">
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
        <div class="flex px-2 mx-2 items-center">
          <a class="btn btn-ghost normal-case text-2xl lg:hidden"
            ><span class="material-symbols-outlined"> restaurant_menu </span
            >Linance</a
          >
        </div>
        <div class="flex items-center">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <span class="material-symbols-outlined text-3xl">
                account_circle
              </span>
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
      </div>
      <div class="max-w-[100vw] h-[92vh]">
        <slot />
      </div>
    </div>
    <div class="drawer-side z-40 h-screen">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <aside class="w-48">
        <div class="flex bg-white ps-5 items-center h-[8vh] text-2xl">
          <span class="material-symbols-outlined"> restaurant_menu </span
          >Linance
        </div>
        <ul class="min-h-[92vh] bg-white menu py-2 px-4 w-full lg:hidden">
          <li class="my-2">
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              ><span class="material-symbols-outlined"> lunch_dining </span
              >產品列表</router-link
            >
          </li>
          <li class="my-2">
            <router-link :to="{ name: 'Order' }" :class="highlight('Order')"
              ><span class="material-symbols-outlined"> list_alt </span
              >訂單紀錄</router-link
            >
          </li>
          <li class="my-2">
            <router-link :to="{ name: 'Coupon' }" :class="highlight('Coupon')"
              ><span class="material-symbols-outlined"> bookmark_remove </span
              >優惠券</router-link
            >
          </li>
        </ul>
        <ul class="min-h-[92vh] hidden lg:block menu menu-sm lg:menu-md px-4">
          <li class="my-2">
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              ><span class="material-symbols-outlined"> lunch_dining </span
              >產品列表</router-link
            >
          </li>
          <li class="my-2">
            <router-link :to="{ name: 'Order' }" :class="highlight('Order')"
              ><span class="material-symbols-outlined"> list_alt </span
              >訂單列表</router-link
            >
          </li>
          <li class="my-2">
            <router-link :to="{ name: 'Coupon' }" :class="highlight('Coupon')"
            ><span class="material-symbols-outlined"> bookmark_remove </span
            >優惠券</router-link
            >
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

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
