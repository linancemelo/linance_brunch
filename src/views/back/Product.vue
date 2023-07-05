<template>
  <BasicTable :columns="columns"></BasicTable>
</template>

<script setup>
import BasicTable from "@/components/back/BasicTable.vue";

const columns = [
  { en: "category", ch: "種類" },
  { en: "name", ch: "產品名稱" },
  { en: "originPrice", ch: "原價" },
  { en: "newPrice", ch: "售價" },
  { en: "stock", ch: "庫存" },
];
</script>

<style scoped></style>
