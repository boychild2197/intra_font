<template>
  <v-app>
    <Topnav @handleDrawer="drawer = !drawer" />
    <!-- <Sidenav :drawer="drawer"/> -->
    <StoriesComponent  />

    
  </v-app>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import StoriesComponent from '../components/StoriesComponent'
export default {
    name:"PostsView",
    data: ()=> ({
        drawer: true

    }),
    components: {
        Topnav,
        StoriesComponent 
    }

}
</script>

<style>

</style>