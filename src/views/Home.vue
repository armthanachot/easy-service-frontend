<template>
  <v-app>
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <Drawer> </Drawer>
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

<style>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  min-height: 100%;
  padding: 16px 16px 16px 56px;
  margin: 0 auto;
}
</style>
