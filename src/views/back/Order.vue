<script setup lang="ts">
import BasicTable from "@/components/back/BasicTable.vue";
import { useUnits } from "@/composables/units.ts";
import { useStore } from "@/store";
import type { OrderInfo, OrderListObj } from "@/types/back/order.ts";
import moment from "moment";

const store = useStore();
const { callApi, confirmAlert, simpleAlert } = useUnits();

const columns = [
  { enName: "name", chName: "姓名" },
  { enName: "tel", chName: "電話" },
  { enName: "address", chName: "地址" },
  { enName: "create_at", chName: "購買日期" },
  { enName: "total", chName: "總金額" },
  { enName: "is_paid", chName: "付款狀態" },
];
const orderList = ref<OrderListObj[]>([]);

onMounted(() => {
  getOrder();
});

const getOrder = async (currentPage = 1) => {
  store.isLoading = true;
  const url = `admin/orders?page=${currentPage}`;
  const result = await callApi(url, "GET", "", true);
  const { success, orders, pagination } = result.data;
  if (success) {
    store.isLoading = false;
    orderList.value = dealOrderInfo(orders);
    store.currentPage = pagination.current_page;
    store.totalPage = pagination.total_pages;
  }
};

const dealOrderInfo = (result: OrderInfo[]) => {
  return result.map(({ create_at, user, ...items }: OrderInfo) => {
    return {
      create_at: moment.unix(create_at).format("YYYY-MM-DD"),
      ...user,
      ...items,
    };
  });
};
const deleteOrder = async (row: OrderListObj) => {
  const { id } = row;
  const check = await confirmAlert(`確定要刪除此筆訂單嗎`, "warning");
  if (check) {
    const result = await callApi(`admin/order/${id}`, "DELETE", {}, true);
    const { success } = result.data;
    if (success) {
      simpleAlert("刪除成功", "success");
      getOrder();
    } else {
      simpleAlert("刪除失敗", "success");
    }
  }
};
</script>

<template>
  <div class="p-3 2xl:p-8 h-full w-full">
    <Loading v-model:active="store.isLoading" />
    <div
      v-if="!store.isLoading"
      class="py-2 mb-2 h-full flex flex-col justify-start bg-white rounded-lg"
    >
      <BasicTable
        :columns="columns"
        :tableInfo="orderList"
        delBtn
        @deleteItem="deleteOrder"
      ></BasicTable>
    </div>
  </div>
</template>

<style scoped></style>
