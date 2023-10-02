<script setup lang="ts">
import NoData from "@/components/NoData.vue";
import Pagination from "@/components/Pagination.vue";
import { useStore } from "@/store";
import { useUnits } from "@/composables/units.ts";
import type { Props } from "@/types/components/basicTable.ts";
import type { ProductInfo } from "@/types/product.ts";

const store = useStore();
const { callApi, clickById, confirmAlert, simpleAlert } = useUnits();

withDefaults(defineProps<Props>(), {
  columns: () => [],
  tableInfo: () => [],
});

const emits = defineEmits(["refresh", "setProductInfo"]);

const editProduct = (row: ProductInfo) => {
    emits("setProductInfo", row);
    clickById("productModal");
};
const deleteProduct = async (row: ProductInfo) => {
    const { id, title } = row;
    const check = await confirmAlert(`確定要刪除${title}嗎`, "warning");
    if (check) {
        const result = await callApi(`admin/product/${id}`, "DELETE", {}, true);
        if (result.data.success) {
            simpleAlert("刪除成功", "success");
            emits("refresh");
        } else {
            simpleAlert("刪除失敗", "success");
        }
    }
};
</script>

<template>
  <div class="text-end w-full pr-2 mb-2">
    <label
      for="productModal"
      class="btn btn-sm bg-warning"
      @click="emits('setProductInfo', {})"
      >新增商品</label
    >
  </div>
  <div v-if="tableInfo.length > 0" class="h-full overflow-y-auto">
    <div class="">
      <table class="table w-full lg:px-40">
        <thead>
          <tr class="text-base text-center">
            <th></th>
            <th v-for="col in columns" :key="col.enName" class="font-bold">
              {{ col.chName }}
            </th>
            <th class="font-bold text-center">動作</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in tableInfo"
            :key="row.id"
            class="text-base text-center text-neutral"
          >
            <td>{{ index + 1 }}</td>
            <td v-for="(col, index) in columns" :key="index">
              <span v-if="col.enName === 'is_enabled'">
                {{ row[col.enName] === 1 ? "有" : "無" }}
              </span>
              <span v-else>{{ row[col.enName] }}</span>
            </td>
            <td class="flex justify-center">
              <button
                class="btn btn-sm w-8 h-8 mr-2 bg-success"
                @click="editProduct(row)"
              >
                <span class="material-symbols-outlined"> edit </span>
              </button>
              <button
                class="btn btn-sm w-8 h-8 bg-error"
                @click="deleteProduct(row)"
              >
                <span class="material-symbols-outlined"> delete </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-center m-10">
      <Pagination
        :totalPage="store.totalPage"
        v-model:currentPage="store.currentPage"
      />
    </div>
  </div>
  <NoData v-else content="目前無任何產品" />
</template>

<style scoped>
td {
  padding: 0.25rem;
}
</style>
