<template>
  <div id="app">
    <Header>
    </Header>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
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
