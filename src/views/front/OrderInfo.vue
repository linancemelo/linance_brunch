<script setup lang="ts">
import { useUnits } from "@/composables/units.ts";

const route = useRoute();
const { callApi } = useUnits();

const orderId = route.params.id;
const orderInfo = ref({});
const foodInfo = ref({});
const userInfo = ref({});

const getOrderInfo = async () => {
  await callApi(`order/${orderId}`, "get", "")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getOrderInfo();
});
</script>

<template>123</template>

<style scoped></style>
