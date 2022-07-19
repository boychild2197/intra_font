<template>
  <v-app>
    <HomeTop />
    <LoginComponent />
  </v-app>
</template>

<script>
import HomeTop from "../components/HomeTop.vue";
import LoginComponent from "../components/LoginComponent.vue";
export default {
  name: "Login",
  components: {
    LoginComponent,
    HomeTop,
  },
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
</style>