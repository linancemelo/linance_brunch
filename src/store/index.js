import { defineStore } from "pinia";
import Axios from "axios";

export const useStore = defineStore("useStore", {
  state: () => {
    return {

    };
  },
  getters: {

  },
  actions: {
    request(requestConfig) {
      return new Promise((resolve, reject) => {
        Axios(requestConfig)
          .then(result => {
              resolve(result);
          })
          .catch(xhr => {
              reject(xhr);
          });
      });
    }
  }
});
