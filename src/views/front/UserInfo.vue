<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";
import router from "@/router";

const { isEmpty, callApi, simpleAlert } = useUnits();

const user = ref({
  name: "",
  email: "",
  tel: "",
  address: "",
});
const message = ref("");

const confirmOrder = async () => {
  const { isValid, errMsg } = checkValid();
  if (!isValid) {
    simpleAlert(errMsg, "error");
    return;
  }

  const data = {
    user: user.value,
    message: message.value,
  };

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

const checkValid = () => {
  const { name, email, tel, address } = user.value;

  if (isEmpty(name)) return { isValid: false, errMsg: "名稱不得為空" };
  if (isEmpty(email)) return { isValid: false, errMsg: "信箱不得為空" };
  if (isEmpty(tel)) return { isValid: false, errMsg: "電話不得為空" };
  if (isEmpty(address)) return { isValid: false, errMsg: "地址不得為空" };

  return { isValid: true, errMsg: "" };
};
</script>

<template>
  <div class="flex flex-col items-center py-5">
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">名字</span>
      </label>
      <input
        type="text"
        placeholder="請輸入名字"
        class="input input-bordered rounded w-full"
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
        class="input input-bordered rounded w-full"
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
        class="input input-bordered rounded w-full"
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
        class="input input-bordered rounded w-full"
        v-model.trim="user.address"
      />
    </div>
    <div class="form-control w-full max-w-lg">
      <label class="label">
        <span class="label-text">備註</span>
      </label>
      <textarea
        class="textarea textarea-bordered rounded h-40"
        placeholder="其他需求"
        v-model.trim="message"
      ></textarea>
    </div>
    <div class="flex justify-between w-full max-w-lg mt-5">
      <button class="btn rounded w-1/3 md:w-1/4">確認餐點</button>
      <button
        class="btn btn-accent rounded w-1/3 md:w-1/4"
        @click="confirmOrder"
      >
        送出訂單
      </button>
    </div>
  </div>
</template>

<style scoped></style>
