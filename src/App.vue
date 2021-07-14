<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <SideNav />
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav
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
    ...mapActions(['toggleSideMenu'])
  }
};
</script>
