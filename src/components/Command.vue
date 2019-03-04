<template>
<div id="command">
  <div style='padding:3px;border:solid 1px;width:100px; border-radius:6px;border-collapse:collapse'>
        <ul>
          <li v-on:click='carrier'>
            けいれき
          </li>
          <li v-on:click='contact'>
            こんたくと
          </li>
          <li>
            とうそう
          </li>
        </ul>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    carrier: function() {
      this.$router.push('/carrier');
      alert('a');
    },
    contact: function() {
      this.$router.push('/contact');
    },
    over: function() {

    }
  }
}
</script>

<style>
#command {
  font-family: osaka;
}
li {
  position: relative;
  display: inline-block;
  text-decoration: none;
}
li::after {
  position: absolute;
  bottom: -2px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
}
li:hover::after {
  transform: scale(1, 1);
}
</style>
