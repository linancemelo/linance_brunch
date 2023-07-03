import { defineStore } from "pinia";
import Axios from "axios";

export const useStore = defineStore("Main", () => {
  // state
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

  return {
    // state
    // actions
    request,
  };
});
