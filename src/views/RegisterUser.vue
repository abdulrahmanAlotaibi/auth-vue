<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">
        Name:
      </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name value />
    <ul>
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
    </ul>
      <button type="submit" name="button">
        Register</button
      >Already have an account?
      <router-link to="/login">
        Login
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          errors:[]
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          console.log(err.response.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
