<script setup lang="ts">
</script>

<template>
  <main>
    <div class="hero min-h-screen" style="background-image: url(/assets/img/home_bg1.png);">
      <div class="hero-overlay bg-opacity-50"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-xl">
          <h1 class="mb-5 text-4xl md:text-5xl font-bold">美味與活力的完美交匯</h1>
          <p class="mb-5 text-2xl font-bold">-輕鬆享受每一口，激發無限能量-</p>
          <button class="btn rounded">立即訂購</button>
        </div>
      </div>
    </div>
    <!-- 品牌故事 -->
    <div class="hero" style="background-image: url(/assets/img/home_bg3.jpg);">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="md:px-40 lg:px-60 py-48 text-center">
          <h1 class="text-4xl font-bold mb-5">店名</h1>
          <p class="tracking-widest mb-5">以貼心服務、新鮮嚴選食材和創意心思為您打造一個美食饗宴。希望您能享受快樂，吃得安心滿足，在這個充滿溫暖熱情的地方，感受台灣在地的熱情胸懷，早餐店文化。</p>
          <button class="btn rounded">了解更多</button>
        </div>
      </div>
    </div>
    <!-- 熱賣商品 -->
    <div class="bg-base-300/30 w-full py-20 text-center" style="background: url(/assets/img/home_bg4.jpg)">
      <div class="mb-6 max-w-full grid grid-cols-2 md:grid-cols-4 xl:px-40">
        <div class="p-2">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full max-w-48">
              <img src="/assets/專案圖片/炒飯/打拋豬炒飯.png" class="" />
            </div>
          </div>
          <p class="text-2xl font-bold mt-2">打拋豬炒飯</p>
          <p class="text-xl font-mono">$100</p>
        </div>
        <div class="p-2">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full max-w-48">
              <img src="/assets/專案圖片/炒飯/櫻花蝦炒飯.png" class="" />
            </div>
          </div>
          <p class="text-2xl font-bold mt-2">櫻花蝦炒飯</p>
          <p class="text-xl font-mono">$120</p>
        </div>
        <div class="p-2">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full max-w-48">
              <img src="/assets/專案圖片/炒飯/蝦仁炒飯.png" class="" />
            </div>
          </div>
          <p class="text-2xl font-bold mt-2">蝦仁炒飯</p>
          <p class="text-xl font-mono">$110</p>
        </div>
        <div class="p-2">
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-full max-w-48">
              <img src="/assets/專案圖片/炒飯/香腸炒飯.png" class="" />
            </div>
          </div>
          <p class="text-2xl font-bold mt-2">香腸炒飯</p>
          <p class="text-xl font-mono">$100</p>
        </div>
      </div>
    </div>
    <!-- 提供服務 -->
    <div class="bg-base-300 w-full py-20" style="background: url(/assets/img/home_bg5.jpg)">
      <div class="grid grid-cols-1 md:grid-cols-3 px-10 lg:px-40 gap-10">
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="/assets/img/e_pay.jpg" alt="電子支付" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">電子支付</h2>
            <p>無論是線上還是線下，支付輕鬆無憂。Line Pay、Apple Pay、悠遊卡、信用卡，方便、安全，輕鬆支付。</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="/assets/img/delivery.jpg" alt="外送" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">外送到府</h2>
            <p>美食不出門，外送到你家。FoodPanda、UberEats、店家外送，選擇多元，口味無界，享受在家的美味時光。</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="/assets/img/gift.jpg" alt="集點卡" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">滿額集點</h2>
            <p>每百元一點，滿五點送美味。集點輕鬆，兌換精緻點心和飲料，品味回饋，美好滋味由你開始。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- APP點餐 -->
    <div class="hero" style="background-image: url(/assets/img/home_bg6.jpg)">
      <div class="hero min-h-[75vh]">
        <div class="hero-content">
          <div class="card glass">
            <div class="card-body flex flex-col md:flex-row">
              <div class="flex flex-col justify-center items-center">
                <h1 class="text-5xl font-bold">線上訂位</h1>
                <h6 class="py-6">掃描QR Code，輕鬆享受智慧訂位與點餐！</h6>
                <div class="flex justify-center">
                  <button class="btn btn-sm btn-outline mr-2 mb-2">    <i class="fa-brands fa-apple"></i>
                    App Store</button>
                  <button class="btn btn-sm btn-outline"><i class="fa-brands fa-google-play"></i>Google Play</button>
                </div>
              </div>
              <div class="flex justify-center items-center p-5">
                <img src="/assets/img/qrcode.png" class="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
