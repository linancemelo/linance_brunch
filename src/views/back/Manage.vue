<template>
  <Navbar/>
  <router-view/>
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
  background: #FEA01C !important;
}
a:focus {
  color: #fff !important;
  background: #FEA01C !important;
}
li {
  color: #fff;
}
</style>
