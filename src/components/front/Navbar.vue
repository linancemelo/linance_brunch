<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";

const route = useRoute();
const { callApi } = useUnits();

const cartLength = ref(0);

const getCartLength = async () => {
  await callApi("cart", "get", "")
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        cartLength.value = response.data.data.carts.length;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

getCartLength();
</script>

<template>
  <input id="home-drawer" type="checkbox" class="drawer-toggle" />
  <div class="navbar bg-base-100 w-full z-50 sticky top-0 shadow-lg">
    <div class="navbar-start">
      <div class="flex-none lg:hidden">
        <label
          for="home-drawer"
          aria-label="open sidebar"
          class="btn btn-square btn-ghost"
        >
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
    </div>
    <div class="navbar-center">
      <ul class="hidden lg:flex z-100">
        <li class="mx-5">
          <router-link
            :to="{ name: 'Menu' }"
            class="hover:text-error"
            :class="{ 'text-red-600 font-bold': route.name === 'Menu' }"
            >美味餐點</router-link
          >
        </li>
        <!--        <li class="mx-5"><router-link :to="{ name: 'Menu' }">最新消息</router-link></li>-->
        <li class="mx-5">
          <router-link :to="{ name: 'Menu' }" class="hover:text-error"
            >線上訂位</router-link
          >
        </li>
      </ul>
      <router-link
        :to="{ name: 'Home' }"
        class="btn btn-ghost normal-case text-xl mx-10"
        >Linance</router-link
      >
      <ul class="hidden lg:flex">
        <li class="mx-5">
          <router-link
            :to="{ name: 'About' }"
            class="hover:text-error"
            :class="{ 'text-red-600 font-bold': route.name === 'About' }"
            >關於我們</router-link
          >
        </li>
        <!--        <li class="mx-5"><router-link :to="{ name: 'Menu' }">常見問題</router-link></li>-->
        <li class="mx-5">
          <router-link :to="{ name: 'Login' }" class="hover:text-error"
            >後台登入</router-link
          >
        </li>
      </ul>
    </div>
    <div class="navbar-end md:mr-5 indicator">
      <span
        class="indicator-item mt-2 bg-red-600 border-none text-white w-[30px] h-[30px] flex justify-center items-center"
        style="border-radius: 50%"
        >{{ cartLength }}</span
      >
      <a href="/Cart" class="btn btn-ghost btn-circle btn-outline">
        <span class="material-symbols-outlined">shopping_cart</span>
      </a>
    </div>
  </div>
  <div class="drawer-side z-[50] max-h-screen">
    <label for="home-drawer" class="drawer-overlay"></label>
    <aside class="w-72 min-h-[100vh] bg-neutral-800">
      <ul class="menu w-full min-h-[100vh] bg-base-200 p-5">
        <li class="flex justify-center">
          <router-link :to="{ name: 'Home' }" class="btn normal-case text-xl"
            >Linance</router-link
          >
        </li>
        <li class="my-1">
          <router-link :to="{ name: 'Menu' }" class="block text-center"
            >美味餐點</router-link
          >
        </li>
        <!--      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">最新消息</router-link></li>-->
        <li class="my-1">
          <router-link :to="{ name: 'Menu' }" class="block text-center"
            >線上訂位</router-link
          >
        </li>
        <li class="my-1">
          <router-link :to="{ name: 'About' }" class="block text-center"
            >關於我們</router-link
          >
        </li>
        <!--      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">常見問題</router-link></li>-->
        <li class="my-1">
          <router-link :to="{ name: 'Login' }" class="block text-center"
            >後台登入</router-link
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<!--<style scoped>-->
<!--a:hover {-->
<!--  color: theme("colors.primary");-->
<!--  background: transparent;-->
<!--}-->
<!--a:active {-->
<!--  color: theme("colors.primary");-->
<!--}-->
<!--</style>-->
