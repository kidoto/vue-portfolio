<template>
<div id='app'>
  <div id='selectMenu' v-if='isSelect'>
    <router-link to="/app" v-on:click.native='check'>App</router-link>
  </div>
  <transition name='slide-fade'>
    <router-view></router-view>
  </transition>


</div>
</template>

<script>
export default {

methods: {
  check: function() {
    console.log(0)
    this.isSelect = false;
  }
},
  data() {
    return {
      isSelect: true,
    }
  }
}


</script>
<style>
#app {
}
</style>
