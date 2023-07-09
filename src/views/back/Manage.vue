<template>
  <div class="h-screen">
    <div class="drawer lg:drawer-open h-full">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-white">
        <div class="navbar h-16">
          <div class="navbar-start">
            <label
              for="my-drawer"
              class="drawer-button btn btn-neutral lg:hidden"
            >
              <span class="material-symbols-outlined"> menu </span>
            </label>
          </div>
          <div class="navbar-center lg:hidden">
            <a class="normal-case text-xl">Linance</a>
          </div>
          <div class="navbar-end">
            <div class="w-10 rounded-full">
              <span class="cursor-pointer material-symbols-outlined" @click="logOut">
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
        <div class="h-16 bg-warning">
          <!-- navbar logo -->
          Linance
          <img src="" alt="" />
        </div>
        <ul class="menu p-4 w-80 h-full text-base-content bg-warning">
          <!-- Sidebar Content -->
          <li class="text-base my-1">
            <router-link to="/Manage/Product">產品列表</router-link>
          </li>
          <li class="text-base my-1">
            <router-link to="/Manage/Order">訂單紀錄</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUnits } from "@/composables/units.js";

const router = useRouter();
const { removeCookie, confirmAlert } = useUnits();

const logOut = async() => {
    const check = await confirmAlert("確定要登出嗎", "warning");
    if (check) {
        removeCookie("linanceAc");
        removeCookie("ltk");
        router.push({ name: "Login" });
    }
};
</script>
