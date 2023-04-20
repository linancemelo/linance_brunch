import axios from "axios";

export default {
  actions: {
    callAPI(url, method, data) {
      let token = "";
      const config = {
        url: url,
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: data
      }
      return new Promise((resolve, reject) => {
        axios(url, config)
            .then(response => {
              resolve(response);
            })
            .catch(error => {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                reject(error);
              }
            });
      });
    }
  }
};