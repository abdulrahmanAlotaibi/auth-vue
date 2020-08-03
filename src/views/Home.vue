<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!loggedIn">
      To use this
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../vuex/helper";
export default {
  computed: {
    ...authComputed,
  },
};
</script>
