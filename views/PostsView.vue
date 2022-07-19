<template>
  <v-app>
    <Topnav @handleDrawer="drawer = !drawer" />
    <Sidenav :drawer="drawer"/>
    <PostsComponent  />

    
  </v-app>
</template>

<script>
import Topnav from '../components/Topnav.vue'
import Sidenav from '../components/Sidenav.vue'
import PostsComponent from '../components/PostsComponent'
export default {
    name:"PostsView",
    data: ()=> ({
        drawer: true

    }),
    components: {
        Topnav,
        Sidenav,
        PostsComponent
    }

}
</script>

<style>

</style>