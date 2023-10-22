<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";
import { ProductInfo } from "@/types/product.ts";

const route = useRoute();
const { callApi } = useUnits();

const id = ref("");
const foodInfo = ref({} as ProductInfo);
const count = ref(1);

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
  await callApi(`product/${id.value}`, "get", "")
    .then((response) => {
      if (response.data.success) {
        foodInfo.value = response.data.product;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const addToCart = async () => {
  const data = {
    product_id: id.value,
    qty: count.value,
  };
  console.log(data);
  await callApi("cart", "post", {
    data
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  id.value = route.params.id as string;
  getFoodInfo();
});
</script>

<template>
  <div
    class="hero min-h-[80vh]"
    style="
      background-image: url(http://twjsp.com.tw/styles/images/products/pattern2.jpg);
    "
  >
    <div class="hero-overlay bg-opacity-20"></div>
    <div class="text-center text-neutral-content lg:flex relative">
      <div class="text-sm breadcrumbs absolute left-5 -top-10">
        <ul>
          <li><a>美味餐點</a></li>
          <li>{{ foodCategory }}</li>
        </ul>
      </div>
      <div class="max-w-lg px-5">
        <div>
          <img :src="foodInfo.imageUrl" alt="" />
        </div>
      </div>
      <div class="max-w-lg px-5">
        <div class="title mb-5">
          <h1 class="text-5xl font-bold">{{ foodInfo.title }}</h1>
          <span>Sesame Hot Dog Bun with Bacon</span>
        </div>
        <div class="price mb-5">
          <h5>原價: {{ foodInfo.origin_price }}</h5>
          <h5>售價: {{ foodInfo.price }}</h5>
        </div>
        <div class="count mb-3">
          <button
            class="btn btn-square btn-sm"
            @click="count--"
            :disabled="count === 1"
          >
            <span class="material-symbols-outlined"> remove </span>
          </button>
          <span>{{ count }}</span>
          <button class="btn btn-square btn-sm" @click="count++">
            <span class="material-symbols-outlined"> add </span>
          </button>
        </div>
        <div class="to-cart mb-5">
          <button class="btn btn-warning mr-5" @click="addToCart">
            加入購物車
          </button>
          <router-link :to="{ name: 'Cart' }" class="btn"
            >前往購物車</router-link
          >
        </div>
        <p>＊產品圖片僅供參考，實際產品以各門市販售為準。</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
