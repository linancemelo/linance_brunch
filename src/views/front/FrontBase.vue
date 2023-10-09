<script setup lang="ts">
import Navbar from "@/components/front/Navbar.vue";
import Footer from "@/components/front/Footer.vue";

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
  <button class="toTop" @click="scrollToTop">
    <span class="material-symbols-outlined text-white">
      keyboard_double_arrow_up
    </span>
  </button>
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
</style>
