<template>
  <div class='MainLayout'>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Header from "./Header";

  import Footer from "./Footer";
  export default {
    name: "MainLayout",
    components: {
      Header,

      Footer
    }
  }
</script>

<style lang="scss">
</style>
