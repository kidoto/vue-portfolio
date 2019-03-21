<template>
<div id="command">
  <div id='block'>
    <ul>
      <li>
        <span>たたかう</span>
      </li>
      <div id='inline'>

        <li v-on:click='carrier'>
          <span>けいれき</span>
        </li>
        <li v-on:click='contact'>
          <span>コンタクト</span>
        </li>
      </div>
      <li>
        <span>とうそう</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    carrier: function() {
      //this.$router.push('/carrier');
      this.$emit('showCarrier');
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
  color: #FFF;
  position: absolute;
  width: 85%;
  top: 0px;
  background-color: #1e50a2;
  border:1px solid #EEE;
  box-shadow:rgba(122, 122, 122, 0.0588235) 0px 0px 6px 3px;
  -webkit-box-shadow:rgba(122, 122, 122, 0.0588235) 0px 0px 6px 3px;
  -moz-box-shadow:rgba(122, 122, 122, 0.0588235) 0px 0px 6px 3px;
}

#command #block {
  padding: 3px;
  border: solid 1px;
  width: 100%;
  border-radius: 6px;
  border-collapse: collapse
}

#command #inline {
  display: table-cell;
}

#command span {
  position: relative;
  text-decoration: none;
}

#command span::after {
  position: absolute;
  bottom: -2px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #FFF;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
}

#command span:hover::after {
  transform: scale(1, 1);
}
</style>
