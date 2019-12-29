<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
nav.navbar {
  background-color:white;
  height:150px;
  width:100%;
}

html {
  background-color:black;
  height:100vh;
  width:100vw;
  font-family:'Be Vietnam', sans-serif;
}

body {
  height:100%;
  width:100%;
  margin:0px;
}
</style>
