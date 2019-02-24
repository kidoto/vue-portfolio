<template>
  <div id='app'>
    <Header>
    </Header>
    <transition name='slide-fade'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
'use strict'
import Header from './components/Header.vue'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase.env'
export default {
  components: {
    Header
  },
  mounted: function(){
    var config = {
      apiKey: firebaseConfig.API_KEY,
      authDomain: firebaseConfig.AUTH_DOMAIN,
      databaseURL: firebaseConfig.DATABASE_URL,
      projectId: firebaseConfig.PROJECT_ID,
      storageBucket: firebaseConfig.STORAGE_BUCKET,
      messagingSenderId: firebaseConfig.MESSAGING_SENDERID
    };
    firebase.initializeApp(config);
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#greeting {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  mergin: 0 auto;
}
</style>
