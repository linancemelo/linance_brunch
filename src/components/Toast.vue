<script setup lang="ts">
const visible = ref(true);
onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 3000);
});
</script>

<template>
  <Transition name="fade">
    <div v-if="visible" class="alert alert-success flex justify-between">
      <slot name="msg"></slot>
      <span @click="visible = false">X</span>
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
