import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        userData.token
      }`;
    },
    CLEAR_USER_DATA(state) {
      localStorage.removeItem("user");
      location.reload()
    },
  },
  actions: {
    register({ commit }, crednetials) {
      return axios
        .post("//localhost:3000/register", crednetials)
        .then(({ data }) => {
          // console.log("user data is:", data);
          commit("SET_USER_DATA", data);
        });
    },
    login({ commit }, crednetials) {
      return axios
        .post("//localhost:3000/login", crednetials)
        .then(({ data }) => {
          // console.log("user data is:", data);
          commit("SET_USER_DATA", data);
        });
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
  },
});
