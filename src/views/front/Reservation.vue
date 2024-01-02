<script setup lang="ts">
import MainHeader from "@/components/front/MainHeader.vue";
import { DatePicker } from "v-calendar";
import "v-calendar/style.css";
import moment from "moment";
import { branchInformation } from "@/data/booking.js";

const selectDate = ref(new Date());

const formatDate = (date) => {
  return date ? moment(date).format("YYYY-MM-DD") : "請選擇用餐日期";
};
</script>

<template>
  <MainHeader bgUrl="/assets/img/menu_bg.jpg" title="線上訂位" />
  <div class="px-5 md:px-12 lg:px-24 2xl:px-72 my-8">
    <!--title-->
    <div>
      <h1 class="font-mono font-bold text-4xl">Linance 李氏</h1>
      <div class="flex justify-between">
        <span>早午餐店</span>
        <div>分享</div>
      </div>
    </div>
    <div role="tablist" class="mt-5 py-2 tabs tabs-bordered tab-border-2">
      <a role="tab" class="tab tab-active text-xl">線上訂位</a>
    </div>
    <section>
      <header class="font-bold text-xl mt-4">選擇訂位時段</header>
      <div class="md:grid md:grid-cols-2 md:gap-1">
        <div class="w-full pt-4">
          <h1>用餐人數</h1>
          <div class="grid grid-cols-2 gap-1">
            <select class="select select-bordered w-full rounded">
              <option disabled selected>請選擇大人</option>
              <option v-for="num in 10" :key="num">{{ num }}位大人</option>
            </select>
            <select class="select select-bordered w-full rounded">
              <option disabled selected>請選擇小孩</option>
              <option v-for="num in 10" :key="num">{{ num }}位小孩</option>
            </select>
          </div>
        </div>
        <div class="w-full pt-4">
          <h1>用餐日期</h1>
          <details id="calendarRef" class="dropdown w-full">
            <summary class="select select-bordered rounded w-full flex items-center">{{ formatDate(selectDate) }}</summary>
            <div class="dropdown-content z-[1] w-full">
              <DatePicker expanded v-model="selectDate" mode="date" />
            </div>
          </details>
        </div>
      </div>
    </section>
    <main class="mt-5">
      <div v-for="(branch, index) in branchInformation" :key="index" class="card md:card-side bg-base-100 shadow-xl my-5">
        <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">{{ branch.name }}</h2>
          <p>{{ branch.address }}</p>
          <div class="card-actions">
            <button v-for="time in branch.availableTime" :key="time" class="btn btn-error btn-sm rounded">{{ time }}</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
