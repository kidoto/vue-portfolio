<template>
<div id="carrier">
  {{text}}
</div>
</template>

<script>
export default {
  data() {
    return {
      text : '経歴やつー'
    }
  }
}
</script>

<style>
#carrier {
  font-family: osaka;
  border:solid 1px;
  border-radius: 3px;
  color: #FFF;
  width: 70%;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  position: absolute;
  background-color: #1e50a2;
  z-index: 1;
}
</style>
