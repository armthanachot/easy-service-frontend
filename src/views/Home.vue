<template>
  <v-app>
    <Drawer></Drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Drawer from '../components/vue/Drawer'

export default {
  name: 'Home',
  components: {
    Drawer
  }
}
</script>
