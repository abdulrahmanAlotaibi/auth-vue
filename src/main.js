import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit("SET_USER_DATA", userData);
    }
    axios.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response.status === 401) {
          this.$store.dispatch("logout");
        }
        return Promise.reject(err);
      }
    );
  },
  render: (h) => h(App),
}).$mount("#app");
