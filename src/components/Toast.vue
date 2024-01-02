<script setup lang="ts">
const visible = ref(true);
const timer = ref(null);

const hideToast = () => {
  visible.value = false;
  clearTimeout(timer.value);
};

onMounted(() => {
  timer.value = setTimeout(() => {
    visible.value = false;
  }, 3000);
});

onUnmounted(() => {
  if (timer.value) clearTimeout(timer.value);
});
</script>

<template>
  <Transition name="fade">
    <div v-if="visible" class="alert bg-green-500 border-none flex justify-between">
      <slot name="msg"></slot>
      <span class="cursor-pointer" @click="hideToast()">X</span>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
