<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";

const { callApi } = useUnits();

const cartList = ref([]);
const finalTotal = ref(0);
const totalAmount = ref(0);
const finalAmount = ref(0);

const getCartList = async () => {
  await callApi("cart", "get", "")
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        cartList.value = response.data.data.carts;
        finalTotal.value = response.data.data.carts.reduce((tQty, i) => {
          return (tQty += i.qty);
        }, 0);
        totalAmount.value = response.data.data.total;
        finalAmount.value = response.data.data.final_total;
        console.log(cartList.value);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const updateCartList = async (item) => {
  await callApi(`cart/${item.id}`, "put", {
    data: {
      product_id: item.product_id,
      qty: item.qty,
    },
  })
    .then((response) => {
      if (response.data.success) {
        getCartList();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const deleteItem = async (item) => {
  await callApi(`cart/${item.id}`, "delete")
    .then((response) => {
      if (response.data.success) {
        getCartList();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const add = (item) => {
  item.qty += 1;
  updateCartList(item);
};
const sub = (item) => {
  item.qty -= 1;
  if (item.qty === 0) {
    deleteItem(item);
    return;
  }
  console.log(123);
  updateCartList(item);
};

onMounted(() => {
  getCartList();
});
</script>

<template>
  <div class="min-w-full flex flex-col justify-center px-5 md:px-20">
    <ul class="steps">
      <li class="step"><span class="text-sm">確認餐點</span></li>
      <li class="step"><span class="text-sm">填寫資料</span></li>
      <li class="step"><span class="text-sm">完成訂單</span></li>
    </ul>
    <div class="lg:flex">
      <!-- 購物車內容 -->
      <div class="w-full lg:w-2/3">
        <h1>購物車內容</h1>
        <div class="card bg-base-300 shadow-xl p-3">
          <div
            v-for="item in cartList"
            :key="item.id"
            class="p-5 flex flex-row card bg-base-100 my-1"
          >
            <div class="">
              <img
                :src="item.product.imageUrl"
                alt=""
                class="w-[5rem] h-[5rem]"
              />
            </div>
            <div class="flex w-full justify-around items-center">
              <h1>{{ item.product.title }}</h1>
              <div class="join">
                <button
                  class="btn btn-square join-item text-2xl"
                  @click="sub(item)"
                >
                  -
                </button>
                <input
                  class="input join-item w-[3rem] px-0"
                  v-model="item.qty"
                />
                <button
                  class="btn btn-square join-item text-2xl"
                  @click="add(item)"
                >
                  +
                </button>
              </div>
              <div>{{ item.product.price }}</div>
              <div>{{ item.final_total }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 訂單摘要 -->
      <div class="w-full lg:w-1/3">
        <h1>訂單摘要</h1>
        <div class="card bg-base-300 shadow-xl p-3">
          <div class="p-5 card bg-base-100 my-1">
            <ul>
              <li class="flex justify-between mb-2">
                <span>總數量</span><span>{{ finalTotal }}</span>
              </li>
              <li class="flex justify-between mb-2">
                <span>小計</span><span>{{ totalAmount }}</span>
              </li>
              <li class="flex justify-between mb-2">
                <div class="join">
                  <div>
                    <div>
                      <input
                        class="input input-sm input-bordered join-item"
                        placeholder="輸入優惠券"
                      />
                    </div>
                  </div>
                  <div class="indicator">
                    <button class="btn btn-sm join-item">套用</button>
                  </div>
                </div>
              </li>
              <li class="flex justify-between">
                <span>運費</span><span>60</span>
              </li>
              <li class="flex justify-between">
                <span>總金額</span><span>{{ finalAmount }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
