<script setup>
import { computed } from "vue";

const props = defineProps({
    totalPage: Number
});
// eslint-disable-next-line no-undef
const curPage = defineModel("currentPage");

const changeCurrentPage = (num) => {
    if (typeof num !== "string") {
        curPage.value = num;
    }
};

const pagesNumToArr = computed(() => {
    const arr = [];
    for (let num = 1; num <= props.totalPage; num++) {
        if (
            Math.abs(num - curPage.value * 1) <= 1 ||
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
                class="join-item btn btn-sm bg-accent text-white"
                @click="curPage -= 1"
        >«</button>
        <button
                v-for="(num, index) of pagesNumToArr"
                :key="index"
                class="join-item btn btn-sm bg-accent text-white"
                :class="[
        curPage === num ? 'btn-active' : '',
        num === '...' ? 'btn-disabled cursor-default' : 'cursor-pointer',
      ]"
                @click="changeCurrentPage(num)"
        >{{ num }}</button>
        <button
                v-show="curPage !== props.totalPage"
                class="join-item btn btn-sm bg-accent text-white"
                @click="curPage += 1"
        >»</button>
    </div>
</template>

<style scoped>
.btn-active {
    background-color: white;
    border-color: theme("colors.accent");
    color: theme("colors.accent");
}
.btn.btn-disabled {
    background-color: transparent;
    color: theme("colors.accent");
}
</style>
