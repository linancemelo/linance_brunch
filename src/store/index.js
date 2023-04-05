import { createStore } from "vuex"; // import actions from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
export const store = createStore({
  state: mutations.state,
  mutations: mutations.mutations,
  actions: actions.actions,
  getters: getters.getters,
});
