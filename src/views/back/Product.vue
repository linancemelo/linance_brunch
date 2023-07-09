<template>
  <BasicTable :columns="columns" :tableInfo="productList"></BasicTable>
</template>

<script setup>
import BasicTable from "@/components/back/BasicTable.vue";
import { useUnits } from "@/composables/units";

const { callApi } = useUnits();

const columns = [
  { enName: "category", chName: "種類" },
  { enName: "title", chName: "產品名稱" },
  { enName: "origin_price", chName: "原價" },
  { enName: "price", chName: "售價" },
  { enName: "is_enabled", chName: "庫存" },
];
const productList = ref([]);

onMounted(() => {
  getProduct();
});

const getProduct = async () => {
  const result = await callApi("admin/products", "GET", "", true);
  if (result.data.success) {
    productList.value = result.data.products;
  }
};

// getProduct();
</script>

<style scoped></style>
