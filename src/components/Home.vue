<template>
  <div class="home">
    <nav class="navbar">
      <img src="../assets/databae.png"/>
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
img {
  height:100px;
  margin:auto;
}

nav.navbar {
  display:flex;
  vertical-align:center;
  justify-content:flex-end;
}
</style>
