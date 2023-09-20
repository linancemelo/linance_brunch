<template>
  <div data-theme="dracula">
    <Navbar>
      <router-view />
    </Navbar>
  </div>
</template>

<script setup>
import Navbar from "@/components/back/Navbar.vue";
</script>
<style scoped>
a:hover {
  color: #fff !important;
}
a:active {
  color: #fff !important;
  background: #fea01c !important;
}
a:focus {
  color: #fff !important;
  background: #fea01c !important;
}
li {
  color: #fff;
}
</style>
