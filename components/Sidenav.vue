<template>
   <v-navigation-drawer v-model="drawer" color="grey accent-3"  app>
      <v-img src="../assets/images/download.jpeg" class="pa-4" >
        <div class="text-center mt-5">
            <v-avatar class="mb-4" color="grey darken-1" size="64">
                <v-img aspect-ratio="30" src="../assets/images/profile2.jpeg"></v-img>
            </v-avatar>
        </div>
        <div class="text-center">
            <h2 class="white--text">INTRA-SITE</h2>
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ text }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Sidenav',
    props:['drawer'],
    data: () => ({
    cards: ["Today", "Yesterday"],
    links: [
      ["mdi-view-gallery", "Posts"],
      ["mdi-image-multiple", "Pictures"],
      ["mdi-folder-play", "Videos"],
      ["mdi-clipboard-list", "Stories"],
      
    ],
  }),

}
</script>

<style>

</style>