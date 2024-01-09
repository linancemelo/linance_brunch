<script setup lang="ts">
import MainHeader from "@/components/front/MainHeader.vue";
import { Ref } from "vue";
import { useUnits } from "@/composables/units";
import type { ProductInfo } from "@/types/back/product.ts";
import bgUrl from "../../../public/assets/img/menu_bg.jpg";

const route = useRoute();
const router = useRouter();
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
const allProductList: Ref<ProductInfo[]> = ref([]);

const routeHash = computed(() =>
  route.hash ? route.hash.split("#")[1] : categoryList[0].enName
);
const currentProductList = computed(() => {
  const result = allProductList.value.filter(
    (product: ProductInfo) => product.category === routeHash.value
  );
  imageLoadedList.value = result.map(() => false);
  return result;
});

const isLoading = ref(false);
const getAllProduct = async () => {
  isLoading.value = true;
  const { data } = await callApi("products/all", "GET", "");
  if (data.success) {
    allProductList.value = data.products;
    isLoading.value = false;
  }
};
const toInfo = (id: string) => {
  router.push(`/Food/${id}`);
};

const imageLoadedList = ref<boolean[]>([]);
const onloadImage = (index: number) => {
  imageLoadedList.value[index] = true;
};

getAllProduct();

const currentCategory = ref(categoryList[0].enName);
watch(currentCategory, (newVal) => {
  router.push({ hash: `#${newVal}` });
});
</script>

<template>
  <MainHeader :bgUrl="bgUrl" title="菜單介紹" />
  <main class="lg:px-24 2xl:px-72 my-8">
    <div class="lg:flex">
      <div class="lg:w-1/5 text-black">
        <div class="px-2 mb-5 lg:hidden">
          <select
            class="select select-bordered w-full"
            v-model="currentCategory"
          >
            <option disabled selected :value="null">請選擇類別</option>
            <option
              v-for="category in categoryList"
              :key="category.enName"
              :value="category.enName"
            >
              {{ category.chName }}
            </option>
          </select>
        </div>
        <ul class="menu w-full lg:block hidden">
          <li
            v-for="category in categoryList"
            :key="category.enName"
            class="mb-2"
          >
            <a
              class="text-lg"
              :href="`#${category.enName}`"
              :class="{ active: category.enName === routeHash }"
              ><span class="material-symbols-outlined"> arrow_right </span
              >{{ category.chName }}</a
            >
          </li>
        </ul>
      </div>
      <div class="lg:w-4/5 px-3">
        <h1 class="text-center text-black text-4xl font-bold">
          {{ findObjInArr(categoryList, "enName", routeHash)?.chName }}
        </h1>
        <hr class="my-3" />
        <div class="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          <template v-if="isLoading">
            <div v-for="i in 5" :key="i" class="bg-base-100 shadow-xl">
              <div
                class="w-full relative overflow-hidden"
                style="padding-top: 90%"
              >
                <div class="w-full image cursor-pointer">
                  <figure class="aspect-square cursor-pointer skeleton">
                  </figure>
                </div>
              </div>
              <div class="py-5">
                <div class="card-title justify-center">
                  <span class="w-[5rem] h-[1.5rem] skeleton"></span>,
                  <span class="w-[3rem] h-[1.5rem] skeleton"></span>
                </div>
              </div>
            </div>
          </template>
          <div
            v-for="(product, index) in currentProductList"
            :key="product.id"
            class="bg-base-100 shadow-xl"
          >
            <div
              class="w-full relative overflow-hidden"
              style="padding-top: 90%"
              @click="toInfo(product.id)"
            >
              <div class="w-full image cursor-pointer">
                <div class="cover"></div>
                <figure
                  class="aspect-square cursor-pointer"
                  :class="{ skeleton: !imageLoadedList[index] }"
                >
                  <img
                    alt=""
                    :src="product.imageUrl"
                    class="h-full transition-all ease-linear bg-gray-100"
                    loading="lazy"
                    @load="onloadImage(index)"
                  />
                </figure>
              </div>
            </div>
            <div class="py-5">
              <div class="card-title justify-center">
                {{ product.title }}, ${{ product.price }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 1;
}
.image:hover .cover {
  opacity: 0.5;
}
</style>
