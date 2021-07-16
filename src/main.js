import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLkVwHBBQV89rhCsbgT7jtct5cB58x3gM",
  authDomain: "my-address-pj-e83dd.firebaseapp.com",
  projectId: "my-address-pj-e83dd",
  storageBucket: "my-address-pj-e83dd.appspot.com",
  messagingSenderId: "15533212214",
  appId: "1:15533212214:web:0ac3d19034128b18face97"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
