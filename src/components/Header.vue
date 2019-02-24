<template>
<div id="header">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/whois">Who is this</router-link>
    <router-link to="/carrier">Carrier</router-link>
    <router-link to="/contact">Contact</router-link>

  </nav>

</div>
</template>

<style>
#header {
  background-color: lightgray;
  text-align: center;
}

a {
  font: 20px;
  font-weight: bold;
  margin: 5px;
}
</style>
