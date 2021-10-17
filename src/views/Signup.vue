<template>
  <div class="my-auto px-4">
    <v-form>
      <v-row>
        <v-col sm="12" md="6" xl="6">
          <v-col sm="12" md="12" xl="12">
            <v-text-field v-model="account_info.email" type="email" label="email">
              <v-icon slot="prepend"> mdi-at </v-icon>
            </v-text-field>
          </v-col>
          <v-col sm="12" md="12" xl="12">
            <v-text-field v-model="account_info.fullName" label="fullname">
              <v-icon slot="prepend"> mdi-signature-text </v-icon>
            </v-text-field>
          </v-col>
          <v-col sm="12" md="12" xl="12">
            <v-text-field v-model="account_info.userName" label="username">
              <v-icon slot="prepend"> mdi-account-outline </v-icon>
            </v-text-field>
          </v-col>
        </v-col>

        <v-col sm="12" md="6" xl="6">
          <v-col sm="12" md="12" xl="12">
            <v-text-field v-model="account_info.password" label="password" type="password">
              <v-icon slot="prepend"> mdi-lock-alert-outline </v-icon>
            </v-text-field>
          </v-col>
          <v-col sm="12" md="12" xl="12">
            <v-text-field v-model="account_info.confirmPassword" label="confirm password" type="password">
              <v-icon slot="prepend"> mdi-lock-check-outline </v-icon>
            </v-text-field>
          </v-col>
          <v-col sm="12" md="12" xl="12">
            <v-select :items="roles" v-model="account_info.userRole" label="Standard">
              <v-icon slot="prepend">mdi-playlist-edit </v-icon>
            </v-select>
          </v-col>
        </v-col>
      </v-row>
      <v-btn class="save-btn mb-5" color="success" @click="signup">SAVE</v-btn>
    </v-form>
    <v-alert prominent :type="alert.type" :value="alert.display" dismissible>
      <v-row align="center">
        <v-col class="grow"> {{ alert.content }} </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script src="../js/signup.js"></script>

<style lang="css">
.save-btn {
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
}
.container-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  max-width: 1820px;
  width: 100%;
  padding: 16px 16px;
}
</style>
