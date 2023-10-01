<script setup>
import { useUnits } from "@/composables/units.ts";
import { useStore } from "@/store/index.js";

const router = useRouter();
const store = useStore();
const { setCookie, removeCookie, getCookie, simpleAlert } = useUnits();

const userInfo = ref({
  username: "",
  password: "liangxu04vu6",
});
const rememberAc = ref(false);
const isLoading = ref(false);

onMounted(() => {
  rememberAc.value = getCookie("rememberAc");
  userInfo.value.username = getCookie("rememberAc")
      ? getCookie("linanceAc")
      : "";
});
// 登入
const login = () => {
  isLoading.value = true;
  store
      .request({
        url: "https://vue3-course-api.hexschool.io/admin/signin",
        method: "POST",
        data: userInfo.value,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (result) => {
        if (result.data.success) {
          setCookie("ltk", result.data.token, 0);
          setCookie("linanceAc", userInfo.value.username, 7);
          if (rememberAc.value) {
            setCookie("rememberAc", rememberAc.value, 7);
          } else {
            removeCookie("rememberAc");
            removeCookie("linanceAc");
          }
          router.push({ name: "Manage" });
        } else {
          simpleAlert(`${result.data.message}`, "error");
        }
        isLoading.value = false;
      })
      .catch((err) => console.log(err));
};

onMounted(() => {
  if (getCookie("rememberAc") && getCookie("linanceAc")) {
    rememberAc.value = getCookie("rememberAc");
    userInfo.value.username = getCookie("linanceAc");
  }
});
</script>

<template>
  <div class="login-container">
    <div class="m-auto px-3 py-2">
      <div class="card md:card-side bg-white">
        <figure>
          <img src="/assets/img/logo.png" alt="" />
        </figure>
        <div class="card-body md:w-2/3 text-black md:py-20">
          <h3 class="text-3xl font-semibold text-center mb-5">登入後台</h3>
          <form @submit.prevent="login" class="space-y-4">
            <div class="form-control">
              <label for="inputEmail" class="mb-1">帳號</label>
              <input
                type="email"
                id="inputEmail"
                class="w-full input input-bordered bg-white"
                placeholder="Email address"
                required
                v-model="userInfo.username"
              />
            </div>
            <div class="form-control">
              <label for="inputPassword" class="mb-1">密碼</label>
              <input
                type="password"
                id="inputPassword"
                class="w-full input input-bordered bg-white"
                placeholder="Password"
                required
                v-model="userInfo.password"
                @keydown.enter="login"
              />
            </div>
            <div class="cursor-pointer flex align-middle">
              <input
                id="rememberAc"
                v-model="rememberAc"
                type="checkbox"
                checked="checked"
                class="checkbox checkbox-sm checkbox-error me-1"
              />
              <label for="rememberAc" class="label-text">記住帳號</label>
            </div>
            <div>
              <button class="btn btn-block bg-black">
                <span
                  v-if="isLoading"
                  class="loading loading-spinner loading-sm text-white"
                ></span>
                <span class="text-white text-base">登入</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  background: url("/assets/img/login_bg.jpg") no-repeat;
  background-size: cover;
  display: flex;
  place-items: center;
  overflow: auto;
  height: 100vh;
}
</style>
