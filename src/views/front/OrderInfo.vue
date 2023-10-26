<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";

const route = useRoute();
const { callApi } = useUnits();

const orderId = route.params.id;
const orderInfo = ref({});
const foodInfo = ref({});
const userInfo = ref({});

const getOrderInfo = async () => {
  await callApi(`order/${orderId}`, "get", "")
    .then((response) => {
      console.log(response);
      const { success, order } = response.data;
      if (success) {
        const { products, user, ...items } = order;
        orderInfo.value = { ...items };
        foodInfo.value = products;
        userInfo.value = user;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const payOrder = async () => {
  await callApi(`pay/${orderId}`, "post").then((response) => {
    const { success } = response.data;
    if (success) {
      getOrderInfo();
    }
  });
};

onMounted(() => {
  getOrderInfo();
});
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>品名</th>
              <th>數量</th>
              <th>小計</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in foodInfo" :key="key">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.total }}</td>
            </tr>
            <tr>
              <td>總計</td>
              <td></td>
              <td>{{ orderInfo.total }}</td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <tbody>
            <tr>
              <td>姓名</td>
              <td>{{ userInfo.name }}</td>
            </tr>
            <tr>
              <td>收件者電話</td>
              <td>{{ userInfo.tel }}</td>
            </tr>
            <tr>
              <td>收件者地址</td>
              <td>{{ userInfo.address }}</td>
            </tr>
            <tr>
              <td>電子郵件</td>
              <td>{{ userInfo.email }}</td>
            </tr>
            <tr>
              <td>付款狀態</td>
              <td>{{ orderInfo.is_paid ? "已付款" : "未付款" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-actions justify-end">
        <button v-if="!orderInfo.is_paid" class="btn btn-primary" @click="payOrder">完成付款</button>
        <router-link :to="{ name: 'Home' }" class="btn btn-primary" @click="payOrder">回首頁</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
