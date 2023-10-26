<script setup lang="ts">
import BasicTable from "@/components/back/BasicTable.vue";
import { useStore } from "@/store";

const store = useStore();
</script>

<template>
  <div class="p-3 2xl:p-8 bg-gray-300 h-full w-full">
    <Loading v-model:active="store.isLoading" />
    <div
      v-if="!store.isLoading"
      class="py-2 mb-2 h-full flex flex-col justify-start bg-white rounded-lg"
    >
      <BasicTable addBtn editBtn delBtn/>
    </div>
  </div>
</template>

<style scoped></style>
