<template>
  <div class="overflow-x-auto">
    <table class="table text-neutral bg-white">
      <thead>
        <tr class="text-base font-black">
          <th></th>
          <th v-for="col in columns" :key="col.en">{{ col.ch }}</th>
          <th>
            <button class="btn btn-sm">
              新增
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: Array,
});
</script>

<style scoped></style>
