<template>
  <v-content class="mx-5 my-3">
    <v-row>
      <v-col cols="12" align="center" justify="center">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="slide.image"></v-img>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row align="space-between" justify="space-between">
          <v-col cols="10"><h2>Recent stories</h2></v-col>
          <v-col cols="2">
            <v-btn color="primary" @click="goToCreatePost()"
              >CREATE STORY</v-btn
            >
          </v-col>
        </v-row>
        <v-divider class="my-2"></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="(story, index) in stories" :key="index">
        <v-card class="mx-auto" max-width="400">
          <!-- <v-img class="white--text align-end" height="200px" :src="post.image"> -->
            <v-card-title>{{ story.title }}</v-card-title>
          <!-- </v-img> -->

          <v-card-subtitle class="pb-0"></v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ story.body }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="my-5"></v-divider>
  </v-content>
</template>

<script>
export default {
  name: "StoriesComponent",
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: [
      {
        image:
          "https://imageio.forbes.com/specials-images/imageserve/5f8ef32c53de1add7201f44a/Artificial-Intelligence-concept/960x0.jpg?format=jpg&width=960",
      },
      {
        image:
          "https://imageio.forbes.com/specials-images/imageserve/5ee2978b434cc00006720d80/0x0.jpg?format=jpg&width=1200",
      },
      {
        image:
          "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      },
    ],
    posts: [
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      },
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      },
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      },
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",
        image: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
      },
    ],
    stories: [
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",
    
      },
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",

      },
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena"
      },
      {
        title: "Kidimbwi",
        body: "huku ni full bata asee, ni ku part hadi ku-party tena",

      },
    ],
  }),
  methods: {
    goToCreatePost() {
      return this.$router.push("/createpost");
    },
  },
};
</script>

<style>
</style>