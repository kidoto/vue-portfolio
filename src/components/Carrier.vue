<template>
<div id="carrier">
  {{text}}
</div>
</template>

<script>
export default {
  data() {
    return {
      text : 'aaaaaaa',
      text2 : 'bbbbb'
    }
  }
}
</script>

<style>
#carrier {
  border:solid 1px;
  border-radius: 3px;
  width: 70%;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  height: 2.5;
  position: absolute;
}
</style>
