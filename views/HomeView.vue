<template>
  <v-app>
    <HomeTop />
    <v-main class="grey lighten-3">
      <v-img src=""></v-img>
      <v-container class="container">
        <v-row> </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HomeTop from '../components/HomeTop.vue'
export default {
  name: "HomeView",
  components: {
    HomeTop,
  },
};
</script>

<style>
.container {
  background-size: cover;
}
</style>
