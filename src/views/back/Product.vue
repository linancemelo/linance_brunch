<template>
  <BasicTable :columns="columns"></BasicTable>
</template>

<script setup>
import BasicTable from "@/components/back/BasicTable.vue";
import { useUnits } from "@/composables/units";

const { callApi } = useUnits();

const columns = [
  { en: "category", ch: "種類" },
  { en: "name", ch: "產品名稱" },
  { en: "originPrice", ch: "原價" },
  { en: "newPrice", ch: "售價" },
  { en: "stock", ch: "庫存" },
];
// const productList = ref([]);

const getProduct = () => {
  const result = callApi("admin/products/all", "GET", "", true);
  console.log(result);
};

getProduct();
</script>

<style scoped></style>
