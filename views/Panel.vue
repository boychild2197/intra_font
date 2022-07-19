<template>
  <v-app>
    <Topnav @handleDrawer="drawer = !drawer" />
    <Sidenav :drawer="drawer"/>
    <v-content>
        <PanelComponent  />
    </v-content>
    
  </v-app>
</template>

<script>
import PanelComponent from '../components/PanelComponent.vue'
import Topnav from '../components/Topnav.vue'
import Sidenav from '../components/Sidenav.vue'
export default {
    name:"Panel",
    data: ()=> ({
        drawer: true

    }),
    components: {
        PanelComponent,
        Topnav,
        Sidenav
    }

}
</script>

<style>

</style>