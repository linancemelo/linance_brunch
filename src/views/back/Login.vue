<template>
    <div class="container-fluid">
        <div class="row">
            <div class="p-5 d-flex flex-column justify-content-center">
                <h3 class="mb-4 text-center">登入後台</h3>
                <form @submit.prevent="login" class="mx-auto">
                    <div class="mb-3">
                        <label for="inputEmail" class="">帳號</label>
                        <input
                                type="email"
                                id="inputEmail"
                                class="form-control rounded-pill"
                                placeholder="Email address"
                                required
                                v-model="userInfo.username"
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
                                v-model="userInfo.password"
                        />
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark btn-md" type="submit">登入</button>
                    </div>
                </form>
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
        <div class="mb-4">
          <label for="inputPassword" class="">密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control rounded-pill"
            placeholder="Password"
            required
            v-model.trim="userInfo.password"
            @keydown.enter="login"
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
</template>

<script setup>
import { callApi, simpleAlert, setCookie } from "@/composables/units";
import { useRouter } from "vue-router";
const router = useRouter();

const userInfo = ref({
    username: "",
    password: ""
});
// 登入
const login = () => {
    callApi(`admin/signin`, "POST", userInfo.value)
        .then(async(res) => {
            if (res.data.success) {
                setCookie("ltk", res.data.token, 0);
                await simpleAlert("登入成功", "success");
                router.push({name: "Manage"});
            }
        })
        .catch(err => console.log(err));
};
</script>

<style scoped lang="scss">
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
@media screen and (min-width: 992px) {
  .row {
    margin-top: 1rem
  }
}
@media screen and (max-width: 992px) {
  .row {
    margin-top: 2rem
  }
}

</style>
