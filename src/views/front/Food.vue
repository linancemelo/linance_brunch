<script setup lang="ts">
import Toast from "@/components/Toast.vue";
import { useUnits } from "@/composables/units.ts";
import { ProductInfo } from "@/types/back/product.ts";

const route = useRoute();
const { callApi } = useUnits();

const id = ref("");
const foodInfo = ref({} as ProductInfo);
const count = ref(1);
const isLoading = ref(false);

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
const foodCategory = computed(
  () =>
    categoryList.find((item) => item.enName === foodInfo.value.category)?.chName
);

const getFoodInfo = async () => {
  isLoading.value = true;
  await callApi(`product/${id.value}`, "get", "")
    .then((response) => {
      if (response.data.success) {
        foodInfo.value = response.data.product;
        isLoading.value = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const minus = () => {
  if (count.value > 1) count.value--;
};

const addToCart = async () => {
  const data = {
    product_id: id.value,
    qty: count.value,
  };
  await callApi("cart", "post", {
    data,
  })
    .then((response) => {
      const { title, unit } = response.data.data.product;
      const toastMsg = `${count.value}${unit}${title}已加入購物車`;
      toastList.value.push(toastMsg);
    })
    .catch((error) => {
      console.log(error);
    });
};
const checked = ref(false);

const imageLoaded = ref(false);
const toastList = ref<string[]>([]);

onMounted(() => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  id.value = route.params.id as string;
  getFoodInfo();
});
</script>

<template>
  <template v-if="toastList.length > 0">
    <div id="toast" class="toast toast-top toast-end z-[999]">
      <Toast v-for="(toast, index) in toastList" :key="index">
        <template #msg>{{ toast }}</template>
      </Toast>
    </div>
  </template>
  <div
    class="food-bg bg-no-repeat bg-cover"
  >
    <div
      class="min-h-[50vh] px-20 lg:px-50 xl:px-60 py-20 flex justify-center items-center"
    >
      <div
        class="w-full text-center text-neutral-content md:flex justify-center items-center lg:px-10"
      >
        <div class="md:w-1/2 relative">
          <div class="text-sm breadcrumbs absolute left-0 -top-10">
            <ul>
              <li>
                <div v-show="!imageLoaded" class="w-12 h-4 skeleton"></div>
                <a v-show="imageLoaded">美味餐點</a>
              </li>
              <li class="w-full">
                <div v-show="!imageLoaded" class="w-12 h-4 skeleton"></div>
                <span v-show="imageLoaded">{{ foodCategory }}</span>
              </li>
            </ul>
          </div>
          <figure
            class="w-full aspect-square bg-gray-100 flex"
            :class="{ skeleton: !imageLoaded }"
          >
            <img
              :src="foodInfo.imageUrl"
              alt=""
              class="img-fit-cover"
              @load="imageLoaded = true"
            />
          </figure>
        </div>
        <div class="md:w-1/2 p-5 flex flex-col justify-center">
          <div class="title w-full mb-5 flex justify-center">
            <h1
              class="min-h-[2.5rem] w-full md:w-1/2 text-4xl font-bold"
              :class="{ skeleton: !imageLoaded }"
            >
              <span v-show="imageLoaded">{{ foodInfo.title }}</span>
            </h1>
          </div>
          <div class="price mb-5 flex flex-col items-center">
            <h5
              class="min-h-[1.5rem] w-20 my-1"
              :class="{ skeleton: !imageLoaded }"
            >
              <span v-show="imageLoaded"
                >原價: {{ foodInfo.origin_price }}</span
              >
            </h5>
            <h5
              class="min-h-[1.5rem] w-20 my-1"
              :class="{ skeleton: !imageLoaded }"
            >
              <span v-show="imageLoaded">售價: {{ foodInfo.price }}</span>
            </h5>
          </div>
          <div class="flex items-center justify-center count mb-3">
            <button class="btn btn-square btn-xs" @click="minus">
              <span class="material-symbols-outlined"> remove </span>
            </button>
            <span class="mx-2 w-5">{{ count }}</span>
            <button class="btn btn-square btn-xs" @click="count++">
              <span class="material-symbols-outlined"> add </span>
            </button>
          </div>
          <div class="to-cart mb-2">
            <button
              class="btn btn-sm btn-warning rounded mr-5"
              @click="addToCart"
            >
              加入購物車
            </button>
            <router-link :to="{ name: 'Cart' }" class="btn btn-sm rounded"
              >前往購物車</router-link
            >
          </div>
          <p class="text-xs">＊產品圖片僅供參考，實際產品以各門市販售為準。</p>
        </div>
      </div>
    </div>
    <div class="collapse collapse-arrow">
      <input
        type="radio"
        name="my-accordion-3"
        :checked="checked"
        @click="checked = !checked"
      />
      <div class="collapse-title text-center text-white">商品詳情</div>
      <div class="collapse-content flex justify-center text-white">
        <p>{{ foodInfo.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.food-bg {
  background-image: url(/assets/img/food_bg.jpg);
}
</style>
