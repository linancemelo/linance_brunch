<script setup lang="ts">
import Navbar from "@/components/back/Navbar.vue";
</script>

<template>
  <div>
    <Navbar>
      <router-view />
    </Navbar>
  </div>
</template>

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
