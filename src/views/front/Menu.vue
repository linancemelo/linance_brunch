<template>
  <Navbar />
  <MainHeader bgUrl="/assets/img/menu_bg.jpg" title="菜單介紹" />
  <main class="lg:px-40 xl:px-50 2xl:px-72 mt-8">
    <div class="flex">
      <div class="w-1/5 text-black">
        <ul class="menu w-full">
          <li
            v-for="category in categoryList"
            :key="category.enName"
            class="mb-2"
          >
            <a
              class="text-lg"
              :href="`#${category.enName}`"
              :class="{ active: category.enName === routeHash }"
              >{{ category.chName }}</a
            >
          </li>
        </ul>
      </div>
      <div class="w-4/5 px-3">
        <h1 class="text-center text-black text-4xl font-bold">
          {{ findObjInArr(categoryList, "enName", routeHash)?.chName }}
        </h1>
        <hr class="my-3" />
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "@/components/front/Navbar.vue";
import MainHeader from "@/components/front/MainHeader.vue";
import { useUnits } from "@/composables/units";

const route = useRoute();
const { findObjInArr } = useUnits();

const categoryList = ref([
  { chName: "美味蛋餅", enName: "chineseOmelet" },
  { chName: "厚蛋吐司", enName: "toast" },
  { chName: "漢堡湯種", enName: "hamburger" },
  { chName: "台式炒飯", enName: "friedRice" },
  { chName: "鐵板麵", enName: "noodle" },
  { chName: "韓式小吃", enName: "korea" },
  { chName: "點心佳餚", enName: "snack" },
  { chName: "精選飲料", enName: "drink" },
]);
const routeHash = computed(() =>
  route.hash ? route.hash.split("#")[1] : categoryList.value[0].enName
);
</script>

<style scoped></style>
