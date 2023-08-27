<template>
  <Navbar />
  <MainHeader bgUrl="/assets/img/menu_bg.jpg" title="菜單介紹" />
  <main class="lg:px-40 xl:px-50 2xl:px-72 mt-8">
    <div class="md:flex">
      <div class="md:w-1/5 text-black">
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
            >
              <span class="material-symbols-outlined"> arrow_right </span>
              {{ category.chName }}</a
            >
          </li>
        </ul>
      </div>
      <div class="md:w-4/5 px-3">
        <h1 class="text-center text-black text-4xl font-bold">
          {{ findObjInArr(categoryList, "enName", routeHash)?.chName }}
        </h1>
        <hr class="my-3" />
        <!--          {{ currentProductList }}-->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="product in currentProductList"
            :key="product.id"
            class="bg-base-100 shadow-xl"
          >
            <div
              class="w-full relative overflow-hidden"
              style="padding-top: 90%"
            >
              <div class="image cursor-pointer">
                  <div class="cover"></div>
                  <img
                  :src="product.imageUrl"
                  alt=""
                  class="h-full transition-all ease-linear cursor-pointer"
                />
              </div>
            </div>
            <div class="py-5">
              <h2 class="card-title justify-center">{{ product.title }}, ${{ product.price }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from "@/components/front/Navbar.vue";
import MainHeader from "@/components/front/MainHeader.vue";
import { useUnits } from "@/composables/units";

const route = useRoute();
const { callApi, findObjInArr } = useUnits();

const categoryList = [
  { chName: "美味蛋餅", enName: "chineseOmelet" },
  { chName: "厚蛋吐司", enName: "toast" },
  { chName: "漢堡湯種", enName: "hamburger" },
  { chName: "台式炒飯", enName: "friedRice" },
  { chName: "鐵板麵", enName: "noodle" },
  { chName: "韓式小吃", enName: "korea" },
  { chName: "點心佳餚", enName: "snack" },
  { chName: "精選飲料", enName: "drink" },
];
const allProductList = ref([]);

const routeHash = computed(() =>
  route.hash ? route.hash.split("#")[1] : categoryList[0].enName
);
const currentProductList = computed(() =>
  allProductList.value.filter((item) => item.category === routeHash.value)
);

const getAllProduct = async () => {
  const { data } = await callApi("products/all", "GET", "");
  if (data.success) allProductList.value = data.products;
};

getAllProduct();
</script>

<style scoped>
a:focus,
li .active {
  color: theme("colors.neutral") !important;
  background: theme("colors.warning") !important;
}
.image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.image:hover img {
  transform: scale(1.2);
}
.image .cover {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1;
}
.image:hover .cover {
  opacity: 0.5;
}
</style>
