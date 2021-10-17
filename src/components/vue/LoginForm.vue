<template>
  <div class="container from-wraper text-center">
    <!-- <v-img
      src="../../../assets/images/pexels-thisisengineering-3861972.jpg"
      style="max-width: 100%; height: auto !important"
    ></v-img> -->
    <h1>SIGN IN</h1>
    <v-form class="form-login">
      <v-row>
        <v-col sm="12" md="12" lg="12">
          <v-text-field v-model="username" label="username"></v-text-field>
        </v-col>
        <v-col sm="12" md="12" lg="12">
          <v-text-field type="password" v-model="password" label="password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" md="6" lg="6">
          <v-btn color="success" @click="Login">Login</v-btn>
        </v-col>
        <v-col sm="6" md="6" lg="6">
          <v-btn color="info" href="/signup">Signup</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script src="../js/LoginForm.js"></script>
<style lang="scss" scoped>
.from-wraper {
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .form-input {
    display: flex;
    flex-direction: column;
    max-width: 750px;
    width: 100%;
  }
  .separator {
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 16px;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #000;
    }
    &:not(:empty)::before {
      margin-right: 0.5em;
    }
    &:not(:empty)::after {
      margin-left: 0.5em;
    }
  }
}
</style>
