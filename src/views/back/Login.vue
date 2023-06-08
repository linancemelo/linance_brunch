<template>
  <div class="background">
    <div class="login-container">
      <div class="row py-md-5 bg-white">
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <img src="../../assets/img/logo.png" alt="" class="img-fluid" />
        </div>
        <div
          class="col-md-6 d-flex flex-column justify-content-center py-md-3 px-lg-6"
        >
          <h3 class="mb-md-5 text-center">登入後台</h3>
          <form @submit.prevent="login">
            <div class="mb-3 fs-7">
              <label for="inputEmail">帳號</label>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                required
                v-model="userInfo.username"
              />
            </div>
            <div class="mb-2 mb-md-3">
              <label for="inputPassword" class="fs-7">密碼</label>
              <input
                type="password"
                id="inputPassword"
                class="form-control"
                placeholder="Password"
                required
                v-model="userInfo.password"
                @keydown.enter="login"
              />
            </div>
            <div class="mb-3 mb-md-4">
              <input
                type="checkbox"
                id="rememberAc"
                class="me-2"
                v-model="rememberAc"
              />
              <label for="rememberAc" class="fs-7">記住我的帳號</label>
            </div>
            <div class="text-center">
              <button class="btn btn-dark btn-md w-100" type="submit">
                <span
                  v-if="isLoading"
                  class="spinner-border spinner-border-sm text-light"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </span>
                登入
              </button>
            </div>
          </form>
          <div class="text-center my-2 my-md-4">
            <span class="dash"></span>
            <span class="text-secondary">或</span>
            <span class="dash"></span>
          </div>
          <div class="text-center mb-4">
            <a class="link-secondary">忘記密碼？</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  callApi,
  simpleAlert,
  setCookie,
  getCookie,
  removeCookie,
} from "@/composables/units";
import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = ref({
  username: "",
  password: "liangxu04vu6",
});
const rememberAc = ref(false);
const isLoading = ref(false);
// 登入
const login = () => {
  isLoading.value = true;
  callApi(`admin/signin`, "POST", userInfo.value)
    .then(async(result) => {
      if (result.data.success) {
        setCookie("ltk", result.data.token, 0);
        setCookie("linanceAc", userInfo.value.username, 7);
        if (rememberAc.value) {
          setCookie("rememberAc", rememberAc.value, 7);
        } else {
          removeCookie("rememberAc");
          removeCookie("linanceAc");
        }
        await simpleAlert("登入成功", "success");
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

<style scoped lang="scss">
.background {
  background-image: url("@/assets/img/login_bg.jpeg");
  display: flex;
  place-items: center;
  overflow: hidden;
  height: 100vh;
}
.login-container {
  padding: 5rem 10rem;
  margin: 0 auto;
}
.row {
  box-shadow: 0 0 20px;
  .dash {
    display: inline-block;
    width: 20%;
    border: 1px solid #ccc;
    margin: 0 .5rem;
    vertical-align: middle;
  }
}
@media (max-width: 768px) {
  .login-container {
    padding: 2rem !important;
  }
}
//@media (max-width: 1200px) {
//  .login-container {
//    padding-left: 1.5rem;
//    padding-right: 1.5rem;
//  }
//}
</style>
