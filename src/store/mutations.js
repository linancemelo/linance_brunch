export default {
  state: {
    token: ""
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    }
  }
};