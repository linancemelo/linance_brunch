<script setup lang="ts">
</script>

<template>
  <main>
    <div class="carousel w-full h-[100vh]">
      <div id="slide1" class="carousel-item relative w-full">
        <img
            src="http://twjsp.com.tw/files/thumbnails/files_images_index_banner-1_1920x1920.jpg"
            class="w-full"
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
            src="https://www.laya.com.tw/upload/home_about_list/twL_home_about_22C12_qysnbkdsic.png"
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
    <div class="bg-base-200">
      <div class="p-10 md:p-20 lg:p-40 text-center">
        <h2 class="">店名</h2>
        <p class="py-5 px-6 md:px-24 lg:px-40 xl:px-72 tracking-widest">以貼心服務、新鮮嚴選食材和創意心思為您打造一個美食饗宴。希望您能享受快樂，吃得安心滿足，在這個充滿溫暖熱情的地方，感受台灣在地的熱情胸懷，早餐店文化。</p>
        <button class="btn btn-outline">了解更多</button>
      </div>
    </div>
    <!-- 提供服務 -->
    <div class="bg-base-300 w-full py-20">
      <h2 class="text-center">提供的服務</h2>
      <div class="divider pb-10">Our Service</div>
      <div class="flex justify-center">
        <div class="card w-96 bg-base-100 shadow-xl mx-10">
          <figure><img src="https://www.qburger.com.tw/uploads/images/%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91-%E5%85%AD%E5%B0%8F%E5%9C%96_%E7%BE%8E%E5%91%B3%E9%A4%90%E9%BB%9E.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl mx-10">
          <figure><img src="https://www.qburger.com.tw/uploads/images/%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91-%E5%85%AD%E5%B0%8F%E5%9C%96_%E7%BE%8E%E5%91%B3%E9%A4%90%E9%BB%9E.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">
              Shoes!
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 熱賣商品 -->
    <div class="bg-base-300/30 w-full py-20 text-center">
      <h2 class="text-center">熱賣商品</h2>
      <div class="divider pb-10">Hot Sales</div>
      <div class="mb-6 flex justify-center">
        <div>
          <div class="avatar placeholder mx-5">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-48">
              <span class="text-3xl">K</span>
            </div>
          </div>
          <p>123</p>
        </div>
        <div>
          <div class="avatar placeholder mx-5">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-48">
              <span class="text-3xl">K</span>
            </div>
          </div>
          <p>123</p>
        </div>
      </div>
      <button class="btn btn-outline">所有商品</button>
    </div>
    <!-- APP點餐 -->
    <div class="bg-base-300">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="/assets/img/qrcode.png" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
