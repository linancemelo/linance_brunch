<template>
  <div class="navbar bg-primary text-primary-content xl:px-48">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><router-link :to="{ name: 'Order' }">訂單列表</router-link></li>
<!--          <li><router-link to="{ name: '' }">Item 2</router-link></li>-->
<!--          <li><router-link to="{ name: '' }">Item 3</router-link></li>-->
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">Linance</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
          <li><router-link :to="{ name: 'Product' }" :class="highlight('Product')">產品列表</router-link></li>
          <li><router-link :to="{ name: 'Order' }" :class="highlight('Order')">訂單列表</router-link></li>
      </ul>
    </div>
    <div class="navbar-end">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                <span class="material-symbols-outlined">
account_circle
</span>
            </label>
            <ul tabindex="0" class="text-neutral mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>使用者：{{ store.userInfo.email }}</li>
                <li class="mt-2">帳號到期日：{{ store.userInfo.expDate }}</li>
                <li class="btn btn-sm mt-2" @click="logOut">登出</li>
            </ul>
        </div>    </div>
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
    removeCookie("linanceAc");
    removeCookie("ltk");
    router.push({ name: "Login" });
  }
};
</script>

<style scoped></style>
