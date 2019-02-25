<template>
<div id="command">
  <table style='border:solid 2px;width:140px; border-radius:6px;'>
    <tr style='height:50px'>
      <td>
        <ul>
          <li>
            <span v-on:click='carrier'>けいれき</span>
          </li>
          <li>
            <span v-on:click='contact'>こんたくと</span>
          </li>
          <li>
            とうそう
          </li>
        </ul>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  methods: {
    carrier: function() {
      this.$router.push('/carrier');
    },
    contact: function() {
      this.$router.push('/contact');
    }
  }
}
</script>

<style>
#command {
  font-family: osaka;
}
</style>
