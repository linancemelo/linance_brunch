<template>
  <Loading v-model:active="store.isLoading" />
  <div class="xl:px-48 mt-4">
    <BasicTable
      v-if="!store.isLoading"
      :columns="columns"
      :tableInfo="productList"
      @setProductInfo="setProductInfo"
      @refresh="getProduct"
    ></BasicTable>
  </div>
  <ProductModal ref="productModalRef" :action="action" @refresh="getProduct" />
</template>

<script setup>
import BasicTable from "@/components/back/BasicTable.vue";
import ProductModal from "@/components/back/ProductModal.vue";
import { useStore } from "@/store/index.js";
import { useUnits } from "@/composables/units.js";

const store = useStore();
const { isEmpty, callApi } = useUnits();

const columns = [
  { enName: "title", chName: "產品名稱" },
  { enName: "category", chName: "種類" },
  { enName: "origin_price", chName: "原價" },
  { enName: "price", chName: "售價" },
  { enName: "is_enabled", chName: "庫存" },
];
const productList = ref([]);
const action = ref("create");
const productModalRef = ref(null);

onMounted(() => {
  getProduct();
});

const getProduct = async () => {
  store.isLoading = true;
  const result = await callApi("admin/products", "GET", "", true);
  if (result.data.success) {
    store.isLoading = false;
    productList.value = result.data.products;
  }
};
const setProductInfo = (info) => {
  action.value = isEmpty(info) ? "create" : "edit";
  productModalRef.value.productInfo = info;
};
</script>

<style scoped></style>
