<script setup lang="ts">
import { useStore } from "@/store";
import { useUnits } from "@/composables/units.ts";

const store = useStore();
const route = useRoute();
const router = useRouter();
const { removeCookie, confirmAlert } = useUnits();

const highlight = (targetPath: string) => {
  return targetPath === route.name ? "active" : "bg-base-accent text-base-100";
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
  <div class="drawer lg:drawer-open bg-gray-300">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col min-h-screen">
      <!-- Navbar -->
      <div class="navbar bg-base-100 justify-between lg:justify-end">
        <div class="flex items-center lg:hidden">
          <label for="my-drawer" class="btn btn-square btn-ghost">
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
        <div class="flex px-2 mx-2 items-center lg:hidden">
          <span class="material-symbols-outlined"> restaurant_menu </span
          >Linance
        </div>
        <div class="flex-none gap-2">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <span class="avatar online w-full">
                <div class="w-24 rounded-full self-center">
                  <img src="https://i.pinimg.com/736x/aa/aa/73/aaaa733a0bc815f1b17cfb5a7d94295e.jpg"/>
                </div>
              </span>
            </label>
            <ul
              tabindex="0"
              class="text-neutral mt-3 z-[1] p-3 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>使用者：{{ store.userInfo.email }}</li>
              <li class="mt-2">帳號到期日：{{ store.userInfo.expDate }}</li>
              <li class="btn btn-sm rounded mt-2 btn-outline" @click="logOut">登出</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="max-w-[100vw]">
        <slot />
      </div>
    </div>
    <div class="drawer-side z-40 max-h-screen">
      <label for="my-drawer" class="drawer-overlay"></label>
      <aside class="w-44 min-h-[100vh] bg-neutral-800">
        <div class="flex items-center justify-center text-2xl py-4 text-base-100">
          <span class="material-symbols-outlined"> restaurant_menu </span
          ><span>Linance</span>
        </div>
        <ul class="menu px-4 w-full lg:hidden">
          <li class="mb-2 rounded hover:bg-base-300">
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              ><span class="material-symbols-outlined"> lunch_dining </span
              >餐點列表</router-link
            >
          </li>
          <li class="mb-2 rounded hover:bg-base-300">
            <router-link :to="{ name: 'Order' }" :class="highlight('Order')"
              ><span class="material-symbols-outlined"> list_alt </span
              >訂單紀錄</router-link
            >
          </li>
          <li class="mb-2 rounded hover:bg-base-300">
            <router-link :to="{ name: 'Coupon' }" :class="highlight('Coupon')"
              ><span class="material-symbols-outlined"> bookmark_remove </span
              >優惠券清單</router-link
            >
          </li>
        </ul>
        <ul class="hidden lg:block menu menu-sm lg:menu-md px-4">
          <li class="mb-2 rounded hover:bg-base-300">
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              ><span class="material-symbols-outlined"> lunch_dining </span
              >餐點列表</router-link
            >
          </li>
          <li class="mb-2 rounded hover:bg-base-300">
            <router-link :to="{ name: 'Order' }" :class="highlight('Order')"
              ><span class="material-symbols-outlined"> list_alt </span
              >訂單紀錄</router-link
            >
          </li>
          <li class="mb-2 rounded hover:bg-base-300">
            <router-link :to="{ name: 'Coupon' }" :class="highlight('Coupon')"
              ><span class="material-symbols-outlined"> bookmark_remove </span
              >優惠券清單</router-link
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
.active {
  background: #D1D5DB !important;
  color: #000 !important;
  border-radius: .25rem;
}
</style>
