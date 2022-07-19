<template>
  <v-app>
    <Topnav @handleDrawer="drawer = !drawer" />
    <!-- <Sidenav :drawer="drawer"/> -->xxczxcxc
    <PostsComponent  />

    
  </v-app>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import PostsComponent from '../components/StoriesComponent'
export default {
    name:"PostsViews",
    data: ()=> ({
        drawer: true

    }),
    components: {
        Topnav,
        PostsComponent 
    }

}
</script>

<style>

</style>