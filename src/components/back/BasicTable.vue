<template>
  <div class="text-end mr-4 lg:mr-8">
    <label
      for="productModal"
      class="btn btn-sm bg-warning"
      @click="emits('setProductInfo', {})"
      >新增商品</label
    >
  </div>
  <div v-if="tableInfo.length > 0" class="overflow-x-scroll">
    <table class="table w-full lg:px-40">
      <thead>
        <tr class="text-base text-center">
          <th></th>
          <th v-for="col in columns" :key="col.enName" class="font-bold">
            {{ col.chName }}
          </th>
          <th class="font-bold">動作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in tableInfo"
          :key="row.id"
          class="text-base text-center text-neutral"
        >
          <td>{{ index + 1 }}</td>
          <td v-for="col in columns" :key="col.id">
            <span v-if="col.enName === 'is_enabled'">
              {{ row[col.enName] === 1 ? "有" : "無" }}
            </span>
            <span v-else>{{ row[col.enName] }}</span>
          </td>
          <td class="flex justify-center">
            <button class="btn btn-sm bg-success" @click="editProduct(row)">
              編輯
            </button>
            <button class="btn btn-sm bg-error" @click="deleteProduct(row)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <NoData v-else content="目前無任何產品" />
</template>

<script setup>
import NoData from "@/components/NoData.vue";
import { useStore } from "../../store/index.js";
import { useUnits } from "../../composables/units.js";

const store = useStore();
const { callApi, clickById, confirmAlert, simpleAlert } = useUnits();

defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  tableInfo: {
    type: Array,
    default: () => [],
  },
});
const emits = defineEmits(["refresh", "setProductInfo"]);

const editProduct = (row) => {
  emits("setProductInfo", row);
  clickById("productModal");
};
const deleteProduct = async (row) => {
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

<style scoped>
td {
  padding: .5rem 1rem;
}
</style>
