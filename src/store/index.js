import { defineStore } from "pinia";
import Axios from "axios";
import moment from "moment";
import { useUnits } from "@/composables/units.js";

export const useStore = defineStore("Main", () => {
  const { getCookie, parseJwt } = useUnits();
  // state
  const isLoading = ref(false);
  const userInfo = ref({});
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

  return {
    // state
    isLoading,
    userInfo,
    // actions
    request,
    setUserInfo,
  };
});
