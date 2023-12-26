<script setup lang="ts">
import Navbar from "@/components/front/Navbar.vue";
import Footer from "@/components/front/Footer.vue";
import { useWindowScroll } from "@vueuse/core/index";
import gsap from "gsap";

const { y } = useWindowScroll();
const isScrolled = ref(false);
const showCookies = ref(false);

// 每當滾動位置改變時，更新 isScrolled
watch(
  () => y.value,
  (newY) => {
    isScrolled.value = newY > 200;
  }
);
const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  gsap.to(".cookies", {
    opacity: 1,
    duration: 1,
    ease: "power1.in"
  });
});
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
  <button v-show="isScrolled" class="toTop" @click="scrollToTop">
    <span class="material-symbols-outlined text-white">
      keyboard_double_arrow_up
    </span>
  </button>
<!--  <div class="cookies card w-80 bg-white rounded-lg opacity-0">-->
<!--    <div class="card-body items-center p-5">-->
<!--      <img src="/assets/img/cookie.png" alt="" width="200" />-->
<!--      <h2 class="card-title font-bold text-2xl">Cookies</h2>-->
<!--      <p class="py-2 text-sm">-->
<!--        為了提供更優質的服務，本網站使用cookies以改善您的瀏覽體驗。點擊下面的"同意"表示您同意我們的-->
<!--        <a href="/cookie-policy" class="text-blue-500 underline">Cookie 政策</a-->
<!--        >。-->
<!--      </p>-->
<!--      <div class="card-actions justify-center">-->
<!--        <button class="btn btn-sm btn-neutral px-10 rounded">同意</button>-->
<!--        <button class="btn btn-sm bg-base-200 px-10 rounded">拒絕</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style scoped>
.toTop {
  position: fixed;
  right: 40px;
  bottom: 40px;
  padding: 15px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  z-index: 99;
  transition: background 0.25s ease-in;
}
.toTop:hover {
  background: rgba(0, 0, 0, 0.7);
}
.cookies {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
