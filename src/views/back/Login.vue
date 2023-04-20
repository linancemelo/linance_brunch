<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex flex-column justify-content-center">
        <h3 class="mb-4 text-center">登入後台</h3>
        <div class="mb-3">
          <label for="inputEmail" class="">帳號</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control rounded-pill"
            placeholder="Email address"
            required
            v-model.trim="userInfo.username"
          />
        </div>
        <div class="mb-4">
          <label for="inputPassword" class="">密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control rounded-pill"
            placeholder="Password"
            required
            v-model.trim="userInfo.password"
          />
        </div>
        <div class="text-center">
          <button class="btn btn-dark btn-md" @click="login">登入</button>
        </div>
        <div class="text-center my-2">
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
import {useRouter} from "vue-router";
import axios from "axios";
const store = useStore();
const router = useRouter();
const userInfo = ref({
  username: "liangvuepractice@mail.com",
  password: "liangxu04vu6"
})

// 登入
const login = () => {
  const url = import.meta.env.VITE_MY_API;
  axios(`${url}admin/signin`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      data: userInfo.value
  }).then(response => {
      console.log(response);
  }).catch(error => {
      console.log(error);
  });
  router.push({ name: "Manage" });
}
</script>

<style>

</style>
