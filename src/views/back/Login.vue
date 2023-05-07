<template>
  <div class="login-container">
    <div class="row py-5">
      <div class="col-md-6 text-center">
        <img src="@/assets/logo.png" alt="" class="img-fluid h-100" />
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center py-3 px-lg-6">
        <h3 class="mb-5 text-center">登入後台</h3>
        <form @submit.prevent="login">
          <div class="mb-3">
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
          <div class="mb-3">
            <label for="inputPassword">密碼</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="userInfo.password"
            />
          </div>
          <div class="mb-4">
            <input type="checkbox" id="rememberAc" />
            <label for="rememberAc">記住我的帳號</label>
          </div>
          <div class="text-center">
            <button class="btn btn-dark btn-md w-100" type="submit">
              登入
            </button>
          </div>
        </form>
        <div class="text-center my-4">
          <span class="dash"></span>
          <span class="text-secondary">或</span>
          <span class="dash"></span>
        </div>
        <div class="text-center">
          <a class="link-secondary">忘記密碼？</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { callApi, simpleAlert, setCookie } from "@/composables/units";
import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = ref({
  username: "liangvuepractice@mail.com",
  password: "liangxu04vu6",
});
// 登入
const login = () => {
  callApi(`admin/signin`, "POST", userInfo.value)
    .then(async (result) => {
      if (result.data.success) {
        setCookie("ltk", result.data.token, 0);
        await simpleAlert("登入成功", "success");
        router.push({ name: "Manage" });
      }
    })
    .catch((err) => console.log(err));
};
</script>

<style scoped lang="scss">
.login-container {
  padding-left: 10rem;
  padding-right: 10rem;
}
.row {
  box-shadow: 0 0 20px;
  .dash {
    display: inline-block;
    width: 20%;
    border: 1px solid #ccc;
    margin: 0 0.5rem;
    vertical-align: middle;
  }
}

@media (max-width: 1200px) {
  .login-container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
