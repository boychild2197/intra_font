<template>
  <v-content class="mx-5 my-3" >
    <v-row >
      <v-col cols="12" align="center" justify="center" >
        <v-carousel
          cycle
          height="550"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <v-img :src="slide.image"></v-img>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>


      </v-col>
    </v-row>
  </v-content>
</template>

<script>
export default {
  name: "PostsComponent",
  data: () => ({
    colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
            {image:'https://imageio.forbes.com/specials-images/imageserve/5f8ef32c53de1add7201f44a/Artificial-Intelligence-concept/960x0.jpg?format=jpg&width=960'},
            {image:'https://imageio.forbes.com/specials-images/imageserve/5ee2978b434cc00006720d80/0x0.jpg?format=jpg&width=1200'},
            {image:'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'}
        ],
  }),
};
</script>

<style>
</style>