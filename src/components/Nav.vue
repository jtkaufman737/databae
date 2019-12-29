<template>
  <div class="nav">
    <nav class="navbar">
      <img src="../assets/databae.png"/>
      <ul class="fullWidth">
        <router-link to="/about">About</router-link>
        <router-link to="/">Posts</router-link>
        <router-link to="/elsewhere">Elsewhere on the web</router-link>
      </ul>
    </nav>
    <section class="postlist">

    </section>
  </div>
</template>

<script>

export default {
  name: 'Nav',

  methods: {},

  beforeMount() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family:'Raleway', sans-serif;
  letter-spacing: 1px;
}

div.nav {
  width:100%;
  margin:0px;
  padding:0px !important;
}

h1,h2,h3,h4,h5,h6 {
 font-family:'Lobster Two', cursive;
}

img {
  height:100px;
  margin:auto;
}

ul.fullWidth {
  width:100%;
  background-color:pink;
}

nav.navbar {
  display:block;
  vertical-align:center;
  justify-content:flex-end;
}

nav.navbar img {
  margin:auto;
  align-self:center;
  display:flex;
  justify-content:space-around;
}

nav.navbar ul {
  display:flex;
  justify-content:center;
  color:white;
  text-transform: uppercase;
  background-color:#4701d0;
  font-weight:400;
  list-style-type:none;
}

ul * {
  padding:2rem 5rem 2rem 5rem;
}

a {
  color:white;
  text-decoration:none;
}
</style>
