<script setup lang="ts">
import Navbar from "@/components/back/Navbar.vue";
import { useStore } from "@/store";

const store = useStore();
const router = useRouter();

onMounted(async () => {
  const isAuthenticated = await store.verifyManagement();
  if (!isAuthenticated) {
    router.push({ name: "Login" });
    return;
  }
  store.setUserInfo();
});
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
