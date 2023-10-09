<script setup lang="ts">
</script>

<template>
  <input id="home-drawer" type="checkbox" class="drawer-toggle" />
  <div class="navbar bg-transparent w-[100vw] fixed top-0 z-50">
    <div class="navbar-start">
      <div class="flex-none lg:hidden">
        <label for="home-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
    </div>
    <div class="navbar-center">
      <ul class="hidden lg:flex z-100">
        <li class="mx-5"><router-link :to="{ name: 'Menu' }">產品列表</router-link></li>
        <li class="mx-5"><router-link :to="{ name: 'Menu' }">產品列表</router-link></li>
        <li class="mx-5"><router-link :to="{ name: 'Menu' }">產品列表</router-link></li>
      </ul>
      <a class="btn btn-ghost normal-case text-xl mx-10">Linance</a>
      <ul class="hidden lg:flex">
        <li class="mx-5"><router-link :to="{ name: 'Menu' }">產品列表</router-link></li>
        <li class="mx-5"><router-link :to="{ name: 'Menu' }">產品列表</router-link></li>
        <li class="mx-5"><router-link :to="{ name: 'Menu' }">產品列表</router-link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle"><span class="material-symbols-outlined">shopping_cart</span></button>
    </div>
  </div>
  <div class="drawer-side" style="z-index: 99">
    <ul class="menu w-full min-h-full bg-base-200 p-0">
      <li class="h-100 py-5 cursor-none flex justify-center">
        <a class="btn normal-case text-xl">Linance</a>
        <label for="home-drawer" aria-label="open sidebar" class="btn btn-square btn-ghost absolute right-5">
          <span class="material-symbols-outlined">close</span>
        </label>
      </li>
      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">產品列表</router-link></li>
      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">產品列表</router-link></li>
      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">產品列表</router-link></li>
      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">產品列表</router-link></li>
      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">產品列表</router-link></li>
      <li class="my-1"><router-link :to="{ name: 'Menu' }" class="block text-center">產品列表</router-link></li>
    </ul>
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
