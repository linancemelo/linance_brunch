<script setup lang="ts">
import BasicTable from "@/components/back/BasicTable.vue";
import CouponModal from "@/components/back/CouponModal.vue";
import { useStore } from "@/store";
import { useUnits } from "@/composables/units.ts";
import type { ProductInfo } from "@/types/back/product.ts";
import type { CouponInfo } from "@/types/back/coupon.ts";
import type { Action } from "@/types/components/action.ts";

const store = useStore();
const { isEmpty, callApi, confirmAlert, simpleAlert, clickById } = useUnits();

const columns = [
  { enName: "title", chName: "優惠券名稱" },
  { enName: "code", chName: "優惠券代碼" },
  { enName: "percent", chName: "折數" },
  { enName: "due_date", chName: "到期日" },
  { enName: "is_enabled", chName: "有效" },
];
const couponList = ref([]);
const action = ref<Action>("create");
const couponModalRef = ref(null);

const getCoupon = async (currentPage = 1) => {
  store.isLoading = true;
  const url = `admin/coupons?page=${currentPage}`;
  const result = await callApi(url, "GET", "", true);
  const { success, coupons, pagination } = result.data;
  if (success) {
    store.isLoading = false;
    couponList.value = coupons;
    store.currentPage = pagination.current_page;
    store.totalPage = pagination.total_pages;
  }
};
const setCouponInfo = (info: CouponInfo) => {
  action.value = isEmpty(info) ? "create" : "edit";
  couponModalRef.value.couponInfo = info;
};
const editCoupon = (row: CouponInfo) => {
  setCouponInfo(row);
  clickById("CouponModal");
};
const deleteCoupon = async (row: ProductInfo) => {
  const { id, title } = row;
  const check = await confirmAlert(`確定要刪除${title}嗎`, "warning");
  if (check) {
    const result = await callApi(`admin/coupon/${id}`, "DELETE", {}, true);
    const { success } = result.data;
    if (success) {
      simpleAlert("刪除成功", "success");
      getCoupon();
    } else {
      simpleAlert("刪除失敗", "success");
    }
  }
};

onMounted(() => {
  getCoupon();
});
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
        :tableInfo="couponList"
        addBtn
        editBtn
        delBtn
        @setModalInfo="setCouponInfo"
        @editItem="editCoupon"
        @deleteItem="deleteCoupon"
      />
    </div>
  </div>
  <CouponModal ref="couponModalRef" :action="action" @refresh="getCoupon" />
</template>

<style scoped></style>
