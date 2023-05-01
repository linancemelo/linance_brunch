import axios from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

export default {
  actions: {
    // callAPI(url, method, data) {
    //   const token = cookies.get("ltkob");
    //   let baseUrl = import.meta.env.VITE_MY_API;
    //   const config = {
    //     url: `${baseUrl}url`,
    //     method: method,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`
    //     },
    //     data: data
    //   };
    //   return new Promise((resolve, reject) => {
    //     axios(url, config)
    //         .then(response => {
    //           resolve(response);
    //         })
    //         .catch(error => {
    //           if (error.response) {
    //             console.log(error.response.data);
    //             reject(error);
    //           }
    //         });
    //   });
    // }
  }
};
