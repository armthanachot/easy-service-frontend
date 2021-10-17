<template>
  <div class="container">
    <v-row>
      <div class="col col-lg-1 col-xl-1 col-md-6 col-sm-12 col-xs-12 ms-15" v-for="(i, index) in menu" :key="index">
        <div class="menu-active" @click="changePage(i.path)">
          <v-img :src="i.icon"></v-img>
          <h3 class="text-center">{{ i.name }}</h3>
        </div>
      </div>
    </v-row>
  </div>
</template>
<script src="../js/Index.js"></script>
<style lang="css">
.menu-active:hover {
  cursor: pointer;
}
</style>
