<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";
import router from "@/router";

const { callApi } = useUnits();

const user = ref({
  name: "",
  email: "",
  tel: "",
  address: "",
});
const message = ref("");

const confirmOrder = async () => {
  const data = {
    user: user.value,
    message: message.value,
  };
  console.log(data);
  await callApi("order", "post", { data })
    .then((response) => {
      if (response.data.success) {
        const orderId = response.data.orderId;
        router.push(`OrderInfo/${orderId}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">名字</span>
      </label>
      <input
        type="text"
        placeholder="請輸入名字"
        class="input input-bordered w-full"
        v-model.trim="user.name"
      />
    </div>
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">信箱</span>
      </label>
      <input
        type="email"
        placeholder="請輸入信箱"
        class="input input-bordered w-full"
        v-model.trim="user.email"
      />
    </div>
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">電話</span>
      </label>
      <input
        type="tel"
        placeholder="請輸入電話"
        class="input input-bordered w-full"
        v-model.trim="user.tel"
      />
    </div>
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">地址</span>
      </label>
      <input
        type="text"
        placeholder="請輸入地址"
        class="input input-bordered w-full"
        v-model.trim="user.address"
      />
    </div>
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">備註</span>
      </label>
      <textarea
        class="textarea textarea-bordered h-40"
        placeholder="其他需求"
        v-model.trim="message"
      ></textarea>
    </div>
    <div class="flex justify-between w-full max-w-lg mt-5">
      <button class="btn w-1/4">確認餐點</button>
      <button class="btn w-1/4" @click="confirmOrder">送出訂單</button>
    </div>
  </div>
</template>

<style scoped></style>
