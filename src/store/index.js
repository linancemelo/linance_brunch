import { defineStore } from "pinia";
import Axios from "axios";
import moment from "moment";
import { useUnits } from "@/composables/units.ts";

export const useStore = defineStore("Main", () => {
  const { getCookie, parseJwt } = useUnits();
  // state
  const isLoading = ref(false);
  const userInfo = ref({});
  const currentPage = ref(1);
  const totalPage = ref(1);
  // actions
  const request = (requestConfig) => {
    return new Promise((resolve, reject) => {
      Axios(requestConfig)
        .then((result) => {
          resolve(result);
        })
        .catch((xhr) => {
          reject(xhr);
        });
    });
  };
  const setUserInfo = () => {
    const { email, exp } = parseJwt(getCookie("ltk"));
    userInfo.value = {
      email: email.split("@")[0],
      expDate: moment(exp * 1000).format("YYYY-MM-DD"),
    };
  };
  const verifyManagement = () => {
    return request({
      url: "https://vue3-course-api.hexschool.io/api/user/check",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("ltk"),
      },
    })
      .then((res) => {
        return res.data.success;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  return {
    // state
    isLoading,
    userInfo,
    currentPage,
    totalPage,
    // actions
    request,
    setUserInfo,
    verifyManagement,
  };
});
