<template>
  <div
    class="w-max-screen h-[250px] lg:h-[400px] relative"
  >
    <img class="bg-cover w-full h-full" :src="bgUrl" alt="">
    <h1
      class="w-1/2 lg:w-1/3 h-full absolute top-0 left-1/2 -translate-x-1/2 -skew-x-12 parallel"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script setup>
defineProps({
  bgUrl: String,
  title: String,
});
</script>

<style scoped>
.parallel {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  background: url("/assets/img/menu_center_bg.jpg") no-repeat;
  background-size: cover;
}
</style>
