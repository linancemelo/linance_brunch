<script setup lang="ts">
type RouteType = "Product" | "Order" | "Coupon";

import NoData from "@/components/NoData.vue";
import Pagination from "@/components/Pagination.vue";
import { useStore } from "@/store";
import type { Props } from "@/types/components/basicTable.ts";

const store = useStore();
const route = useRoute();
const routeName = route.name as RouteType;

const {
  columns = [],
  tableInfo = [],
  addBtn = false,
  editBtn = false,
  delBtn = false,
} = defineProps<Props>();
defineEmits(["setModalInfo", "deleteItem", "editItem"]);

const typeMap = {
  Product: "餐點",
  Order: "訂單",
  Coupon: "優惠券",
};

const categoryList = [
  { chName: "美味蛋餅", enName: "chineseOmelet" },
  { chName: "厚蛋吐司", enName: "toast" },
  { chName: "漢堡湯種", enName: "hamburger" },
  { chName: "台式炒飯", enName: "friedRice" },
  { chName: "鐵板麵", enName: "noodle" },
  { chName: "韓式小吃", enName: "korea" },
  { chName: "點心佳餚", enName: "snack" },
  { chName: "精選飲料", enName: "drink" },
];
const getCategoryChName = (colEn: string) => {
  return categoryList.find((item) => item.enName === colEn)?.chName;
};
</script>

<template>
  <div v-if="addBtn" class="text-end w-full pr-2 mb-2">
    <label
      :for="`${routeName}Modal`"
      class="btn btn-sm bg-warning"
      @click="$emit('setModalInfo', {})"
      >新增{{ typeMap[routeName] }}</label
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
            <th v-if="editBtn || delBtn" class="font-bold text-center">動作</th>
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
              <span v-else-if="col.enName === 'is_paid'">
                {{ row[col.enName] ? "已付款" : "未付款" }}
              </span>
              <span v-else-if="col.enName === 'category'">
                {{ getCategoryChName(row[col.enName]) }}
              </span>
              <span v-else>{{ row[col.enName] }}</span>
            </td>
            <td class="flex justify-center">
              <button
                v-if="editBtn"
                class="btn btn-sm w-8 h-8 mr-2 bg-success"
                @click="$emit('editItem', row)"
              >
                <span class="material-symbols-outlined"> edit </span>
              </button>
              <button
                v-if="delBtn"
                class="btn btn-sm w-8 h-8 bg-error"
                @click="$emit('deleteItem', row)"
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
  <NoData v-else :content="`目前無任何${typeMap[routeName]}`" />
</template>

<style scoped>
td {
  padding: 0.25rem;
}
</style>
