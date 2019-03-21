<template>
<div id="gauge">
  <span id="charcterStatus">
      {{name}} {{hp}}
  </span>
  <progress id="lifeBar" value="0" max="100" min="0" optimum="100"></progress>
</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      mess: '',
      min: 0,
      max: 100,
      now: null,
      isActive: false,
      activeGauge: null,
      name: 'ワイ',
      hp: 9999
    }
  },
  mounted: function update() {
    let vm = this;

    this.activeGauge = setInterval(function() {
      vm.up()
    }, 10);
    this.now = document.getElementById('lifeBar');
  },
  methods: {
    update: function() {
      let vm = this;

      this.activeGauge = setInterval(function() {
        vm.up()
      }, 10);
    },
    up: function() {
      this.min++;
      this.now.value++;
      // console.log('min' + this.min);
      if (this.min === this.max) {
        this.gaugeMaxed();
      }
    },
    gaugeMaxed: function() {
      this.isActive = true;
      clearInterval(this.activeGauge);
      document.getElementById('lifeBar').style.background = 'orange';
      this.appearCommand();
    },
    appearCommand: function() {
      this.$emit('appearCommand');
    }
  }
}
</script>

<style>
#charcterStatus {
  color: #FFF;
}

#lifeBar {
  color: #000;
  padding: 1px;
}
</style>
