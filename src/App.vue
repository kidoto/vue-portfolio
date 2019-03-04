<template>
  <div id='app'>
    {{talking}}
    <Header>
    </Header>
<!--
    <table style='width:100%;'>
      <tbody>
        <tr id='area'>
          <td id='enemy'>
            a
          </td>
          <td id='party'>
            b
          </td>
        </tr>
        <tr id='command'>
          <td id='enemyWindow'>
            a
          </td>
          <td id='partyWindow'>
            <Gauge/>
          </td>
        </tr>
      </tbody>
    </table>
  -->
    <v-app id="inspire">
    <v-layout row wrap fill-height>
      <v-flex xs7>
         <v-card>
           <v-card-title primary-title>
             それっぽい敵を表示するエリア
           </v-card-title>
         </v-card>
       </v-flex>
       <v-flex xs5 >
         <v-card>
           <v-card-title primary-title>
             自分
           </v-card-title>
         </v-card>
       </v-flex>
       <v-flex xs7 column>
          <v-card>
            <v-card-title primary-title>
              げんじつ
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs5 column>
           <v-card>
             <v-card-title primary-title>
                <Gauge/>
             </v-card-title>
           </v-card>
         </v-flex>
     </v-layout>
     </v-app>

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
import Gauge from '@/components/CommandGauge.vue'

export default {
  components: {
    Header,
    Gauge
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
  },
  data() {
    return {
      talking: ''
    }
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

td{
  border: 1px solid;
}

#area #enemy{
  width: 70%;
  heigth: 200px;
}

#area #party{
  width: 30%;
  height: 200px;
}
</style>
