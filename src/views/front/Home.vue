<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".home-bg", {
    "--radius": "110%",
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom+=300 top",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      // markers: true,
    },
  });

  gsap.from(".home-word", {
    x: -500,
    duration: 1.5,
    ease: "linear",
  });

  gsap.to(".home-word", {
    yPercent: 500,
    opacity: "0",
    scrollTrigger: {
      trigger: ".home-bg",
      scrub: 1,
      // markers: true,
      start: "top+=50 top",
      end: "bottom center",
      onEnter: () => {
        gsap.to(".ham", {
          opacity: 0,
          y: -200,
        });
        gsap.to(".intro", {
          opacity: 1,
          duration: 1.5,
          ease: "power1.in",
        });
      },
      onLeaveBack: () => {
        gsap.to(".ham", {
          opacity: 1,
          y: 0,
          ease: "power1.in",
        });
        gsap.to(".intro", {
          opacity: 0,
          duration: 1.5,
          ease: "power1.out",
        });
      },
    },
  });

  gsap.utils.toArray(".home-second").forEach((panel) => {
    panel.bg = panel.querySelector(".bg");

    gsap.to(panel.bg, {
      backgroundPosition: `50% ${ -innerHeight / 2 }px`,
      ease: "none",
      scrollTrigger: {
        trigger: panel,
        scrub: true,
        // markers: true
      },
    });
  });

  gsap.utils.toArray(".title").forEach((panel, index) => {
    gsap.from(panel, {
      scrollTrigger: {
        trigger: panel,
        onEnter: () => {
          gsap.fromTo(
            panel,
            { x: index % 2 === 0 ? 300 : -300, opacity: 0.5 },
            { x: 0, opacity: 1, ease: "power2.inOut", duration: 1 }
          );
        },
      },
    });
  });
  gsap.utils.toArray(".btn-more").forEach((panel) => {
    gsap.from(panel, {
      scrollTrigger: {
        trigger: panel,
        onEnter: () => {
          gsap.fromTo(
              panel,
              { y: 100, opacity: 0.5 },
              { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 }
          );
        },
      },
    });
  });
});
</script>

<template>
  <main class="overflow-clip">
    <div
      class="home hero min-h-screen max-h-screen bg-cover max-w-full"
      :style="`background-image: url(${new URL('/assets/img/tests.png', import.meta.url).href})`"
    >
      <div
        class="home-bg absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center z-20"
      ></div>
      <img
        class="ham absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[21]"
        src="/assets/img/hmg.png"
      />
      <div
        class="home-word z-[22] tracking-widest absolute text-[4rem] md:text-[6rem]"
      >
        <h2 class="text-center my-[-1rem]">Welcome</h2>
        <!--        <h2 class="text-center my-[-1rem]">Linance</h2>-->
      </div>
      <div class="hero-overlay bg-opacity-50"></div>
      <div
        class="intro hero-content text-center text-neutral-content opacity-0"
      >
        <div class="max-w-xl">
          <div class="card glass">
            <div class="card-body">
              <h1 class="mb-5 text-xl md:text-3xl font-bold flex flex-col">
                <span>Awaken Your Taste</span>
                <span>Start a Beautiful Day</span>
              </h1>
              <p class="text-2xl font-bold">-輕鬆享受每一口-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 提供服務 -->
    <div class="hero home-second relative">
      <div
        class="bg"
        style="background-image: url(/assets/img/home_bg5.jpg)"
      ></div>
      <div class="section py-10">
        <h1 class="title text-[3rem] text-center text-white italic my-10">
          Our Service
        </h1>
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-5 pt-5">
              <img
                src="/assets/img/e_pay.jpg"
                alt="電子支付"
                class="rounded-xl max-w-[15rem]"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title">電子支付</h3>
              <p>
                無論是線上還是線下，Line Pay、Apple
                Pay、悠遊卡等等，方便、安全，輕鬆支付。
              </p>
            </div>
          </div>
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-5 pt-5">
              <img
                src="/assets/img/delivery.jpg"
                alt="外送"
                class="rounded-xl max-w-[15rem]"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title">外送到府</h3>
              <p>
                美食不出門，外送到你家。FoodPanda、UberEats、店家外送，選擇多元，享受在家的美味時光。
              </p>
            </div>
          </div>
          <div class="card w-80 bg-base-100 shadow-xl">
            <figure class="px-5 pt-5">
              <img src="/assets/img/gift.jpg" alt="集點卡" class="rounded-xl max-w-[15rem]" />
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title">滿額集點</h3>
              <p>
                每百元一點，滿五點送美味。集點輕鬆，兌換精緻點心和飲料。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 品牌故事 -->
    <div class="hero home-second relative">
      <div
        class="bg"
        style="background-image: url(/assets/img/home_bg3.jpg)"
      ></div>
      <div class="section py-10">
        <h1 class="title text-[3rem] text-center text-warning italic">Origin</h1>
        <div class="hero-content text-center text-white">
          <div class="pt-10 md:px-40 lg:px-60 xl:px-80 text-center">
            <h1 class="text-4xl font-bold">李氏 · 早午餐</h1>
            <p class="tracking-widest py-5 font-bold">
              以貼心服務、新鮮嚴選食材和創意心思為您打造一個美食饗宴。希望您能享受快樂，吃得安心滿足，在這個充滿溫暖熱情的地方，感受台灣在地的熱情胸懷，早餐店文化。
            </p>
            <router-link :to="{ name: 'About' }" class="btn btn-warning btn-more rounded">了解更多</router-link>
          </div>
        </div>
      </div>

    </div>
    <!-- 熱賣商品 -->
    <div class="hero home-second relative">
      <div
        class="bg"
        style="background-image: url(/assets/img/home_bg4.png)"
      ></div>
      <div class="section py-10">
        <h1 class="title pt-10 text-[3rem] text-center italic">Hot Sales</h1>
        <div
          class="grid grid-cols-1 md:grid-cols-3 p-10 lg:px-20 gap-10"
        >
            <div>
              <div class="avatar placeholder">
                <div class="w-48 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2 bg-base-300">
                  <img src="/assets/專案圖片/炒飯/櫻花蝦炒飯.png" class="" />
                </div>
              </div>
              <div class="text-center">
                <p class="text-2xl font-bold mt-2">櫻花蝦炒飯</p>
                <p class="text-xl font-mono">$100</p>
              </div>
            </div>
          <div>
            <div class="avatar placeholder">
              <div class="w-48 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2 bg-base-300">
                <img src="/assets/專案圖片/麵類/蘑菇面.png" class="" />
              </div>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold mt-2">蘑菇麵</p>
              <p class="text-xl font-mono">$45</p>
            </div>
          </div>
          <div>
            <div class="avatar placeholder">
              <div class="w-48 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2 bg-base-300">
                <img src="/assets/專案圖片/漢堡/德腸蛋堡.jpeg" class="" />
              </div>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold mt-2">德腸蛋堡</p>
              <p class="text-xl font-mono">$50</p>
            </div>
          </div>
        </div>
        <div class="w-full text-center">
          <router-link :to="{ name: 'Menu' }" class="btn btn-neutral btn-more rounded px-5">立即訂購</router-link>
        </div>
      </div>
    </div>
    <!-- APP點餐 -->
    <div class="hero home-second relative">
      <div
        class="bg hero-overlay"
        style="background-image: url(/assets/img/home_bg6.jpg)"
      ></div>
      <div class="section hero-content text-center flex-col">
        <h1 class="title pt-10 text-[3rem] text-center italic">Reservation</h1>
        <div class="card glass">
          <div class="card-body flex flex-col md:flex-row">
            <div class="flex flex-col justify-center items-center">
              <h1 class="text-[2rem] font-bold">線上訂位</h1>
              <h6 class="py-6">掃描QR Code，輕鬆享受智慧訂位與點餐！</h6>
              <div class="flex justify-center">
                <button class="btn btn-sm btn-outline mr-2 mb-2">
                  <i class="fa-brands fa-apple"></i> App Store
                </button>
                <button class="btn btn-sm btn-outline">
                  <i class="fa-brands fa-google-play"></i>Google Play
                </button>
              </div>
            </div>
            <div class="flex justify-center items-center p-5">
              <img src="/assets/img/qrcode.png" class="rounded-lg shadow-2ㄟxl object-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-family: Gasoek One, sans-serif;
}
h2 {
  font-family: Dancing Script, sans-serif;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px #000000, -1px 0 #787879, -1px 2px #000000, -2px 1px #787879,
    -2px 3px #000000, -3px 2px #787879, -3px 4px #000000, -4px 3px #787879,
    -4px 5px #000000, -5px 4px #787879, -5px 6px #000000, -6px 5px #787879,
    -6px 7px #000000, -7px 6px #787879, -7px 8px #000000, -8px 7px #787879;
}
.home-bg {
  background: radial-gradient(
    circle at center,
    transparent var(--radius),
    rgba(0, 0, 0, 0.9) var(--radius)
  );
  --radius: 0%;
}
.home-second {
  min-height: 100vh;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat !important;
  background-attachment: fixed;
}
</style>
