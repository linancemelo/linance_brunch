<template>
  <div class="overflow-x-auto">
    <table class="table text-neutral bg-white">
      <thead>
        <tr class="text-base font-black">
          <th></th>
          <th v-for="col in columns" :key="col.enName">{{ col.chName }}</th>
          <th>
            <button class="btn btn-sm">新增</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableInfo" :key="row.id">
          <th>{{ index + 1 }}</th>
          <td v-for="col in columns" :key="col.enName">
            <span v-if="col.enName === 'is_enabled'">
              {{ row[col.enName] === 1 ? "有" : "無" }}
            </span>
            <span v-else>{{ row[col.enName] }}</span>
          </td>
          <td>
              <button class="btn btn-sm bg-primary">編輯</button>
              <button class="btn btn-sm bg-warning">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  tableInfo: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
