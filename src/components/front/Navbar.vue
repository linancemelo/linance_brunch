<template>
  <header
    class="sticky navbar text-primary-content lg:px-40 xl:px-50 2xl:px-72 justify-between"
  >
    <div class="">
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
          <li>
            <router-link :to="{ name: 'Menu' }" :class="highlight('Menu')"
              >菜單介紹</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'Product' }" :class="highlight('Product')"
              >關於我們</router-link
            >
          </li>
        </ul>
      </div>
      <router-link :to="{ name: 'Home' }" class="btn btn-ghost normal-case font-bold text-4xl text-primary"
        >Linance</router-link
      >
    </div>
    <div class="navbar-center hidden lg:flex justify-between">
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link
            class="text-lg"
            :to="{ name: 'Menu' }"
            :class="highlight('Menu')"
            >菜單介紹</router-link
          >
        </li>
        <li>
          <router-link
            class="text-lg"
            :to="{ name: 'Product' }"
            :class="highlight('Product')"
            >關於我們</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
const highlight = (targetPath) => {
  return targetPath === route.name ? "active" : "";
};
</script>

<style scoped>
a:hover {
  color: theme("colors.primary");
  background: transparent;
}
a:active {
  color: theme("colors.primary");
}
</style>
