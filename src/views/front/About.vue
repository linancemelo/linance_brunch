<script setup lang="ts">
import MainHeader from "@/components/front/MainHeader.vue";
import bgUrl from "../../../public/assets/img/about_bg.jpeg";

</script>

<template>
  <MainHeader :bgUrl="bgUrl" title="關於我們" />
  <div class="px-5 py-10">
    <div class="lg:flex">
      <div class="hidden w-1/4 lg:flex justify-center items-center">
        <img
          class="mask mask-circle"
          src="/assets/img/egg_icon.png"
        />
      </div>
      <div class="lg:w-3/4 px-5">
        <h1 class="font-bold text-4xl">About Us.</h1>
        <p class="py-2">
          Linance，蘊含著Li老板的金融智慧與對美食的熱愛，將姓氏和finance的精髓結合，締造出一家獨具特色的早午餐店。店內以特色炒飯為招牌，每一道菜都是Li老板用心烹製的絕妙巧思。這裡不僅是味蕾的享受，更是對品味和創新的追求。歡迎您踏入Linance，品味由金融風采和美食編織而成的獨特饗宴。
        </p>
        <p class="py-2">
          在這個富有創意的早午餐店，特色炒飯不僅是菜單的亮點，更是呈現了Li老板對於金融藝術和烹飪藝術的獨到見解。Linance，不僅提供美味佳餚，更為您打開一扇通往獨特味覺之門。
        </p>
      </div>
    </div>
  </div>
  <div class="px-5 py-10 flex justify-center">
    <img
      src="/assets/img/teamwork-banner.jpeg"
      alt=""
      class="px-5"
    />
  </div>
  <div class="px-5 py-10">
    <div class="hero-content flex-col-reverse lg:flex-row">
      <div class="lg:w-1/2">
        <img
          src="/assets/img/work_together.jpeg"
          class="w-full rounded-lg shadow-2xl"
        />
      </div>
      <div class="lg:w-1/2">
        <h1 class="text-2xl lg:text-4xl font-bold text-center">
          專注創造，堅持品質
        </h1>
      </div>
    </div>
  </div>
  <div class="px-5 py-10">
    <div class="px-5">
      <div
        class="stats stats-vertical md:stats-horizontal shadow flex flex-col md:flex-row justify-center"
      >
        <div class="stat">
          <div class="stat-title">品項</div>
          <div class="stat-value">50</div>
          <div class="stat-desc">超過50種食物</div>
        </div>
        <div class="stat">
          <div class="stat-title">來客數</div>
          <div class="stat-value">1,500</div>
          <div class="stat-desc">平均每日消費人數</div>
        </div>
        <div class="stat">
          <div class="stat-title">分店數</div>
          <div class="stat-value">10</div>
          <div class="stat-desc">持續擴展中</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
