<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />
    <v-main>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import SideNav from './components/SideNav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
        if (this.$router.currentRoute.name === 'home') this.$router.push({ name: 'addresses' })
      } else {
        this.deleteLoginUser()
        this.$router.push({ name: 'home' })
      }
    })
  },
  data () {
    return {

    }
  },
  methods: {
    // 以下のコードは同じ。
    // mapActionsを使えば別でメソッドを定義する必要がなくなる。
    // toggleSideMenu () {
    //   this.$store.dispatch('toggleSideMenu')
    // },
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
};
</script>
