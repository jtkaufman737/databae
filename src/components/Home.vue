<template>
  <div class="home">
    <nav class="navbar">
      <img src="../assets/databae.png"/>
      <ul class="fullWidth">
        <li>about</li>
        <li>posts</li>
        <li>elsewhere on the web</li>
      </ul>
    </nav>
    <section class="postlist">

    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',

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

li {
  padding:2rem 5rem 2rem 5rem;
}
</style>
