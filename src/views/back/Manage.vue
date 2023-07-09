<template>
  <div class="h-screen">
    <div class="drawer lg:drawer-open h-full">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-white">
        <div class="navbar h-16">
          <div class="navbar-start">
            <label
              for="my-drawer"
              class="drawer-button btn btn-sm btn-neutral lg:hidden"
            >
              <span class="material-symbols-outlined"> menu </span>
            </label>
          </div>
          <div class="navbar-center lg:hidden">
            <a class="h-16 flex justify-center items-center text-3xl text-accent font-bold font-mono">Linance</a>
          </div>
          <div class="navbar-end">
            <div class="w-10 rounded-full flex items-center">
              <span
                class="cursor-pointer material-symbols-outlined text-neutral
"
                @click="logOut"
              >
                logout
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-full h-full bg-secondary p-10"
          style="height: calc(100% - 4rem)"
        >
          <!-- Page Content -->
          <router-view />
        </div>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <h1 class="h-16 flex justify-center items-center text-3xl text-accent font-bold font-mono bg-neutral">
          <!-- navbar logo -->
            Linance
        </h1>
        <ul class="menu p-4 w-80 h-full text-base-content bg-neutral">
          <!-- Sidebar Content -->
          <li class="text-base my-1'">
            <router-link
              to="/Manage/Product"
              :class="route.name === 'Product' ? 'bg-warning' : ''"
              ><span class="material-symbols-outlined mr-2"> category </span
              >產品列表</router-link
            >
          </li>
          <li class="text-base my-1">
            <router-link
              to="/Manage/Order"
              :class="route.name === 'Order' ? 'bg-warning' : ''"
              ><span class="material-symbols-outlined mr-2"> list_alt </span
              >訂單紀錄</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUnits } from "@/composables/units.js";

const router = useRouter();
const route = useRoute();
const { removeCookie, confirmAlert } = useUnits();

const logOut = async () => {
  const check = await confirmAlert("確定要登出嗎", "warning");
  if (check) {
    removeCookie("linanceAc");
    removeCookie("ltk");
    router.push({ name: "Login" });
  }
};
</script>
<style scoped>
a:hover {
  color: #fff !important;
}
a:active {
  color: #fff !important;
  background: #FEA01C !important;
}
a:focus {
  color: #fff !important;
  background: #FEA01C !important;
}
li {
  color: #fff;
}
</style>
