<template>
<div id='home'>
  this is home.

  <div id='greeting'>Welcome to Kidoto's portfolio.
  </div>
  <div id='greetingMessage'>
    メッセージ
  </div>

  <Gauge>
  </Gauge>

</div>
</template>

<script>
import Gauge from '@/components/CommandGauge.vue'

export default {
  components: {
    Gauge
  }
}
</script>

<style>
</style>
