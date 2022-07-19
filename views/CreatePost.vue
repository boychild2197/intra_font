<template>
  <v-app>
    <Topnav />
    <v-content>
      <v-row class="my-5">
        <v-col class="2"></v-col>
        <v-col class="8">
          <v-card color="grey accent-3" dark elevation="5">
            <div class="text-center " >
              <v-card-title class="text-h4 font-weight-bold">
                CREATE POST
              </v-card-title>
            </div>

            <v-card-text>
              <v-form>
                <div>
                  <v-text-field label="Title" type="text" color="blue" />
                </div>
                <div>
                  <v-textarea
                    outlined
                    color="blue"
                    name="input-7-4"
                    label="Write text here"
                  ></v-textarea>
                </div>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn> Publish </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="2"></v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
  name: "CreatePost",
  components: {
    Topnav,
  },
};
</script>

<style>
</style>