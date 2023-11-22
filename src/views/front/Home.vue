<script setup lang="ts">
</script>

<template>
  <main class="lg:px-5">
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <img
            src="/assets/img/home_bg1.png"
            class="w-full object-contain"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
            src="/assets/img/home_bg2.png"
            class="w-full"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
    <!-- 此處背景需透明 -->
    <div class="hero" style="background-image: url('/assets/img/home_bg3.jpg');">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="py-48 text-center">
          <h1 class="text-4xl font-bold">店名</h1>
          <p class="tracking-widest">以貼心服務、新鮮嚴選食材和創意心思為您打造一個美食饗宴。希望您能享受快樂，吃得安心滿足，在這個充滿溫暖熱情的地方，感受台灣在地的熱情胸懷，早餐店文化。</p>
          <button class="btn">了解更多</button>
        </div>
      </div>
    </div>
    <!-- 提供服務 -->
    <div class="bg-base-300 w-full py-20"  style="background: url('https://img.freepik.com/free-photo/brown-wooden-textured-flooring-background_53876-101851.jpg?w=1380&t=st=1700662866~exp=1700663466~hmac=80493b0fb5c95ab275e6ee2490bfcbaa1cc76db3cb63d03a7d194de6bc9df4a4') no-repeat; background-size: cover">
      <div class="flex justify-center">
        <div class="card w-1/4 mx-2 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="https://img.freepik.com/free-photo/3d-hand-making-cashless-payment-from-smartphone_107791-16609.jpg?w=740&t=st=1700660727~exp=1700661327~hmac=3c59ed5f52912956d45c2eef2869a137000cb61b254f407ed999458856cbe20b" alt="電子支付" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">電子支付</h2>
            <p>無論是線上還是線下，支付輕鬆無憂。Line Pay、Apple Pay、悠遊卡、信用卡，方便、安全，輕鬆支付。</p>
          </div>
        </div>
        <div class="card w-1/4 mx-2 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="https://img.freepik.com/free-photo/3d-render-courier-hands-give-carton-box-client_107791-16196.jpg?w=740&t=st=1700660625~exp=1700661225~hmac=e199fa625c660370a20cb4833c5f3bd3f7b1a2ed006bcd8d8e2cfd91b6f49850" alt="外送" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">外送到府</h2>
            <p>美食不出門，外送到你家。FoodPanda、UberEats、店家外送，選擇多元，口味無界，享受在家的美味時光。</p>
          </div>
        </div>
        <div class="card w-1/4 mx-2 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src="https://img.freepik.com/free-photo/gift-box-design_1156-855.jpg?w=740&t=st=1700661108~exp=1700661708~hmac=a16075c0c57bc998f3e109ef2591fe78a5c7a8330c5340da181d022fe45f9870" alt="集點卡" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">滿額集點</h2>
            <p>每百元一點，滿五點送美味。集點輕鬆，兌換精緻點心和飲料，品味回饋，美好滋味由你開始。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 熱賣商品 -->
    <div class="bg-base-300/30 w-full py-20 text-center">
      <div class="mb-6 flex justify-center">
        <div>
          <div class="avatar placeholder mx-5">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-48">
              <img src="/assets/專案圖片/炒飯/打拋豬炒飯.png" />
            </div>
          </div>
          <p>打拋豬炒飯</p>
          <p>$100</p>
        </div>
        <div>
          <div class="avatar placeholder mx-5">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-48">
              <img src="/assets/專案圖片/炒飯/櫻花蝦炒飯.png" />
            </div>
          </div>
          <p>櫻花蝦炒飯</p>
          <p>$120</p>
        </div>
        <div>
          <div class="avatar placeholder mx-5">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-48">
              <img src="/assets/專案圖片/炒飯/蝦仁炒飯.png" />
            </div>
          </div>
          <p>蝦仁炒飯</p>
          <p>$110</p>
        </div>
        <div>
          <div class="avatar placeholder mx-5">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-48">
              <img src="/assets/專案圖片/炒飯/香腸炒飯.png" />
            </div>
          </div>
          <p>香腸炒飯</p>
          <p>$100</p>
        </div>
      </div>
      <button class="btn btn-outline">所有商品</button>
    </div>
    <!-- APP點餐 -->
    <div class="hero" style="background-image: url('https://img.freepik.com/free-photo/close-up-hands-holding-smartphone_23-2149303372.jpg?w=1380&t=st=1700665050~exp=1700665650~hmac=59c945def1144a12a2840196a9a3dc2b483bc0d42330c09c50e3194471117e9a')">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="/assets/img/qrcode.png" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">線上訂位點餐</h1>
            <p class="py-6">掃描QR Code，輕鬆享受智慧訂位與點餐體驗！</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
