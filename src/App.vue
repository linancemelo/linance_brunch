<script setup>
console.log("A");
cosnole.log("C")
</script>

<template>
  <router-view />
</template>

<style>
body::-webkit-scrollbar {
  background-color: #fff;
  width: 16px;
  height: auto;
}

body::-webkit-scrollbar-track {
  background-color: #fff;
}

body::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 4px solid #fff;
}

body::-webkit-scrollbar-button {
  display: none;
}
</style>
