<script setup lang="ts">
const route = useRoute();

const getStepClass = (routeName: string) => {
  const { name } = route;
  if (name === "CartInfo") {
    if (routeName === "CartInfo") return "step-accent text-accent";
  } else if (name === "UserInfo") {
    if (routeName === "CartInfo" || routeName === "UserInfo")
      return "step-accent text-accent";
  } else {
    return "step-accent text-accent";
  }
};
</script>

<template>
  <div class="min-w-full flex flex-col justify-center px-5 md:px-20 min-h-[80vh]">
    <ul class="steps">
      <li class="step" :class="getStepClass('CartInfo')">
        <span class="text-sm">確認餐點</span>
      </li>
      <li class="step" :class="getStepClass('UserInfo')">
        <span class="text-sm">填寫資料</span>
      </li>
      <li class="step" :class="getStepClass('OrderInfo')">
        <span class="text-sm">完成訂單</span>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style scoped></style>
