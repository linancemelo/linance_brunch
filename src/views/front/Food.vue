<script setup lang="ts">
</script>

<template>
  <div
    class="hero min-h-[80vh]"
    style="
      background-image: url(http://twjsp.com.tw/styles/images/products/pattern2.jpg);
    "
  >
    <div class="hero-overlay bg-opacity-20"></div>
    <div class="text-center text-neutral-content lg:flex relative">
      <div class="text-sm breadcrumbs absolute left-5 -top-10">
        <ul>
          <li><a>美味餐點</a></li>
          <li>漢堡</li>
        </ul>
      </div>
      <div class="max-w-lg px-5">
        <div>
          <img src="/assets/專案圖片/吐司/培根蛋吐司.jpg" alt="">
        </div>
      </div>
      <div class="max-w-lg px-5">
        <div class="title mb-5">
          <h1 class="text-5xl font-bold">培根陽光堡</h1>
          <span>Sesame Hot Dog Bun with Bacon</span>
        </div>
        <div class="price mb-5">
          <h5>原價: 11,111</h5>
          <h5>售價: 1,111</h5>
        </div>
        <div class="count mb-3">
          <button class="btn btn-square btn-sm">
            <span class="material-symbols-outlined"> remove </span>
          </button>
          <span>1</span>
          <button class="btn btn-square btn-sm">
            <span class="material-symbols-outlined"> add </span>
          </button>
        </div>
        <div class="to-cart mb-5">
          <button class="btn btn-warning mr-5">加入購物車</button>
          <button class="btn">前往購物車</button>
        </div>
        <p>＊產品圖片僅供參考，實際產品以各門市販售為準。</p>
      </div>
    </div>
  </div>
  <div class="min-w-full flex justify-center">
    <div class="tabs">
      <a class="tab tab-bordered tab-active">餐點介紹</a>
      <a class="tab tab-bordered">營養標示</a>
    </div>
  </div>
</template>
<style scoped></style>
