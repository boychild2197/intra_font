<template>
  <v-app-bar app color="primary accent-7" flat height="110">
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="100">
        <v-img
          src=""
          height="100"
          width="100"
        ></v-img>
      </v-avatar>

      <v-spacer></v-spacer>
      <h1 class="white--text font-weigth-bold">INTRANET SITE</h1>
      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <div class="">
          <span class="mx-2">
            <v-btn class="blue--text">login</v-btn>
          </span>
          <span>
            <v-btn class="blue--text">register</v-btn>
          </span>
        </div>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "HomeTop",
};
</script>

<style>
</style>