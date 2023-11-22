<script setup lang="ts">
import { computed } from "vue";

type Props = {
  totalPage: number
}

const props = withDefaults(defineProps<Props>(), {
  totalPage: 1,
});
// eslint-disable-next-line no-undef
const curPage = defineModel<number>("currentPage", { default: 1 });

const changeCurrentPage = (num: string | number) => {
  if (typeof num !== "string") {
    curPage.value = num;
  }
};

const pagesNumToArr = computed(() => {
  const arr = [];
  for (let num = 1; num <= props.totalPage; num++) {
    if (
      Math.abs(num - curPage.value) <= 1 ||
      num === 1 ||
      num === props.totalPage
    ) {
      arr.push(num);
    } else {
      if (arr[arr.length - 1] !== "...") {
        arr.push("...");
      }
    }
  }

  return arr;
});
</script>

<template>
  <div v-if="totalPage > 1" class="join justify-center">
    <button
      v-show="curPage !== 1"
      class="join-item btn btn-sm bg-primary rounded text-white mr-0.5"
      @click="curPage -= 1"
    >
      &#10094;
    </button>
    <button
      v-for="(num, index) of pagesNumToArr"
      :key="index"
      class="join-item btn btn-sm rounded bg-primary text-white mr-0.5"
      :class="[
        curPage === num ? 'btn-active' : '',
        num === '...' ? 'btn-disabled cursor-default' : 'cursor-pointer',
      ]"
      @click="changeCurrentPage(num)"
    >
      {{ num }}
    </button>
    <button
      v-show="curPage !== props.totalPage"
      class="join-item btn btn-sm bg-primary rounded text-white"
      @click="curPage += 1"
    >
      &#10095;
    </button>
  </div>
</template>

<style scoped>
.btn-active {
  background-color: white;
  border-color: theme("colors.primary");
  color: theme("colors.primary");
}
.btn.btn-disabled {
  background-color: transparent;
  color: theme("colors.primary");
}
.btn:hover {
  background-color: theme("colors.primary");;
}
</style>
