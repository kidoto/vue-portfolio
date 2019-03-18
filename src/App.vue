<template>
<div id='app2'>
  {{talking}}
  <transition name='slide-fade'>
    <Carrier v-if='isCarrier'></Carrier>
  </transition>
<!--
  <Header>
  </Header>
-->
  <transition name='slide-fade'>
    <router-view></router-view>
  </transition>
  <v-app id="inspire">
    <v-layout row wrap fill-height>
      <v-flex xs7>
        <v-card height='100%'>
          <v-card-title primary-title>
            それっぽい敵を表示するエリア
            <img src='./assets/emperor.jpg' />
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs5>
        <v-card height='100%'>
          <v-card-title primary-title>
            自分
            <div>
              <img src='./assets/cat.jpg' width='50%' />
              <img src='./assets/cat.jpg' width='50%' />
              <img src='./assets/cat.jpg' width='50%' />
              <img src='./assets/cat.jpg' width='50%' />
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs7 column>
        <v-card class='bottom' height='100%' style='border:5px solid #FFF'>
          <v-card-title primary-title>
            <transition name='slide-fade'>
              <Command v-on:showCarrier='showCarrier' v-if='isCommand' />
            </transition>
            げんじつ
          </v-card-title>

        </v-card>
      </v-flex>
      <v-flex xs5 column>
        <v-card class='bottom' height='100%' style='border:5px solid #FFF'>
          <v-card-title primary-title>
            <Gauge v-on:appearCommand='appearCommand' />
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>

</div>
</template>

<script>
'use strict'
import Header from './components/Header.vue'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase.env'
import Gauge from '@/components/CommandGauge.vue'
import Command from '@/components/Command.vue'
import Carrier from '@/components/Carrier.vue'

export default {
  components: {
    Header,
    Gauge,
    Command,
    Carrier
  },
  mounted: function() {
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
  methods: {
    appearCommand: function() {
      this.isCommand = true;
    },
    showCarrier: function() {
      this.isCarrier = true;
    }
  },
  data() {
    return {
      talking: '',
      isCommand: false,
      isCarrier: false
    }
  }
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  position: relative;
}

#greeting {
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  mergin: 0 auto;
}

td {
  border: 1px solid;
}

#area #enemy {
  width: 70%;
  heigth: 20vh;
}

#area #party {
  width: 30%;
  height: 20vh;
}

.bottom {
  color: #FFF !important;
  background-color: #1e50a2 !important;
}
</style>
