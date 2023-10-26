<script setup lang="ts">
import BasicTable from "@/components/back/BasicTable.vue";
import ProductModal from "@/components/back/ProductModal.vue";
import { useStore } from "@/store";
import { useUnits } from "@/composables/units.ts";
import type { ProductInfo } from "@/types/product.ts";

const store = useStore();
const { isEmpty, callApi, confirmAlert, simpleAlert, clickById } = useUnits();

const columns = [
  { enName: "title", chName: "產品名稱" },
  { enName: "category", chName: "種類" },
  { enName: "origin_price", chName: "原價" },
  { enName: "price", chName: "售價" },
  { enName: "is_enabled", chName: "庫存" },
];
const productList = ref([]);
const action = ref<"create" | "edit">("create");
const productModalRef = ref<any>(null);

watch(
  () => store.currentPage,
  (newPage) => {
    getProduct(newPage);
  }
);

onMounted(() => {
  getProduct();
});

const getProduct = async (currentPage = 1) => {
  store.isLoading = true;
  const url = `admin/products?page=${currentPage}`;
  const result = await callApi(url, "GET", "", true);
  if (result.data.success) {
    store.isLoading = false;
    productList.value = result.data.products;
    store.currentPage = result.data.pagination.current_page;
    store.totalPage = result.data.pagination.total_pages;
  }
};
const setProductInfo = (info: ProductInfo) => {
  action.value = isEmpty(info) ? "create" : "edit";
  productModalRef.value.productInfo = info;
};
const editProduct = (row: ProductInfo) => {
  setProductInfo(row);
  clickById("productModal");
};
const deleteProduct = async (row: ProductInfo) => {
  const { id, title } = row;
  const check = await confirmAlert(`確定要刪除${title}嗎`, "warning");
  if (check) {
    const result = await callApi(`admin/product/${id}`, "DELETE", {}, true);
    if (result.data.success) {
      simpleAlert("刪除成功", "success");
      getProduct();
    } else {
      simpleAlert("刪除失敗", "success");
    }
  }
};
</script>

<template>
  <div class="p-3 2xl:p-8 bg-gray-300 h-full w-full">
    <Loading v-model:active="store.isLoading" />
    <div
      v-if="!store.isLoading"
      class="py-2 mb-2 h-full flex flex-col justify-start bg-white rounded-lg"
    >
      <BasicTable
        :columns="columns"
        :tableInfo="productList"
        addBtn
        editBtn
        delBtn
        @setModalInfo="setProductInfo"
        @deleteItem="deleteProduct"
        @editItem="editProduct"
      ></BasicTable>
    </div>
  </div>
  <ProductModal ref="productModalRef" :action="action" @refresh="getProduct" />
</template>

<style scoped></style>
