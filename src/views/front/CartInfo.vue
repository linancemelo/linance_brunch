<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";
import NoData from "@/components/NoData.vue";

const router = useRouter();
const { isEmpty, callApi, simpleAlert } = useUnits();

const cartList = ref([]);
const finalTotal = ref(0);
const totalAmount = ref(0);
const finalAmount = ref(0);
const couponCode = ref("");
const couponContent = ref("");
const isLoading = ref(false);

const getCartList = async () => {
  isLoading.value = true;
  await callApi("cart", "get", "")
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        cartList.value = response.data.data.carts;
        finalTotal.value = response.data.data.carts.reduce((tQty, i) => tQty + i.qty, 0);
        totalAmount.value = response.data.data.total;
        finalAmount.value = response.data.data.final_total;
        console.log(cartList.value);
        isLoading.value = false;
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
  updateCartList(item);
};
const useCoupon = async () => {
  const result = await callApi("coupon", "post", {
    data: { code: couponCode.value },
  });
  const { success, message } = result.data;
  if (success) {
    getCartList();
    couponContent.value = message;
  }
};

const openUserInfo = () => {
  if (isEmpty(cartList.value)) {
    simpleAlert("快去加入商品", "warning");
    return;
  }
  router.push({ name: "UserInfo" });
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  getCartList();
});
</script>

<template>
  <div class="xl:flex xl:p-5 min-h-screen mt-5">
    <!-- 購物車內容 -->
    <div class="w-full xl:w-2/3 lg:p-5 mb-5">
      <h1 class="font-bold text-xl">購物車內容</h1>
      <div class="card bg-base-300 shadow-xl p-3">
        <template v-if="isLoading">
          <div
              v-for="item in 3"
              :key="item"
              class="p-5 flex flex-row card bg-base-100 my-1"
          >
            <div class="w-1/3 flex items-center">
              <div
                  class="w-[5rem] h-[5rem] skeleton"
              />
            </div>
            <div class="w-2/3 px-3 flex flex-col sm:flex-row justify-center sm:items-center">
              <h1 class="sm:w-1/3">
                <div class="w-[4.5rem] h-[1rem] skeleton"></div>
              </h1>
              <div class="sm:w-1/3 my-1"><div class="w-[2rem] h-[1rem] skeleton"></div></div>
              <div class="sm:w-1/3 join">
                <button
                    class="btn btn-square btn-sm join-item text-2xl"
                >
                  -
                </button>
                <input class="input input-sm join-item w-[3rem] px-0" value="1"  />
                <button
                    class="btn btn-square btn-sm join-item text-2xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </template>
        <template v-if="cartList.length === 0 && !isLoading">
          <div>
            <NoData content="哇！購物車竟然空了！"></NoData>
          </div>
        </template>
        <div
          v-for="item in cartList"
          :key="item.id"
          class="p-5 flex flex-row card bg-base-100 my-1"
        >
          <div class="w-1/3 flex items-center">
            <img
              :src="item.product.imageUrl"
              alt=""
              class="w-[5rem] h-[5rem]"
            />
          </div>
          <div class="w-2/3 px-3 flex flex-col sm:flex-row justify-center sm:items-center">
            <h1 class="sm:w-1/3">{{ item.product.title }}</h1>
            <div class="sm:w-1/3">${{ item.product.price }}</div>
            <div class="sm:w-1/3 join">
              <button
                class="btn btn-square btn-sm join-item text-2xl"
                @click="sub(item)"
              >
                -
              </button>
              <input class="input input-sm join-item w-[3rem] px-0" v-model="item.qty" />
              <button
                class="btn btn-square btn-sm join-item text-2xl"
                @click="add(item)"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 訂單摘要 -->
    <div class="w-full xl:w-1/3 lg:p-5 mb-5">
      <h1 class="font-bold text-xl">訂單摘要</h1>
      <div class="card bg-base-300 shadow-xl p-3">
        <div class="p-5 card bg-base-100 my-1">
          <ul>
            <li class="flex justify-between mb-2">
              <span>總數量</span><span>{{ finalTotal }}</span>
            </li>
            <li class="flex justify-between mb-2">
              <span>小計</span><span>{{ totalAmount }}</span>
            </li>
            <li class="max-w-full mb-2">
              <div class="flex justify-between">
                <input
                    class="input input-sm w-36 input-bordered"
                    placeholder="輸入優惠券"
                    v-model.trim="couponCode"
                />
                <button class="btn btn-sm rounded" @click="useCoupon">
                  套用
                </button>
              </div>
              <div>{{ couponContent }}</div>
            </li>
            <li class="flex justify-between">
              <span>運費</span><span>60</span>
            </li>
            <li class="flex justify-between">
              <span>總金額</span><span>{{ finalAmount }}</span>
            </li>
            <li class="mt-5">
              <button @click="openUserInfo" class="btn btn-accent rounded w-full">
                填寫用戶資料
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
