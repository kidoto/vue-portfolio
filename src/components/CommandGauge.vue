<template>
<div id="gauge">
  <progress id="lifeBar" value="0" max="100" min="0" optimum="100"></progress>
  <button v-on:click='up'>bbb</button>{{isShow}}
  <br />
</div>
</template>

<script>
export default {
  name: 'gauge',
  data() {
    return {
      isShow: false,
      mess: '',
      min: 0,
      max: 100,
      now: null,
      isActive: false,
      activeGauge: null
    }
  },
  mounted: function update() {
    let vm = this;

    this.activeGauge = setInterval(function() {
      vm.up()
    }, 10);
    this.now = document.getElementById('lifeBar');
    //    for (let i=0; i<lifeBar.max;i++,lifeBar.value++){
    //      console.log('a');
    //  }
    //let isShow = false;
    //最大値に達したらループ終了
    //    if (lifeBar.value >= lifeBar.max) {
    //      console.log(0)
    //      vm.mess = 'aaa';
    //    clearTimeout(gameTimer);

    //       lifeBar.value = 0;
    //      console.log('max');
    //    }

  },
  methods: {
    up: function() {
      this.min++;
      this.now.value++;
      console.log('min' + this.min);
      if (this.min === this.max) {
        this.gaugeMaxed();
      }
    },
    gaugeMaxed: function() {
      this.isActive = true;
      //      this.now.value = 0;
      console.log('max');
      clearInterval(this.activeGauge);
    }
  }
}
</script>

<style>
</style>
