<template >
  <Navbar/>
  <!-- <LandingPage/> -->
  <router-view />

</template>

<script setup>
  import AddToCart from "./components/AddToCart.vue"
  import Card from "./components/Card.vue"
  import LandingPage from "./components/LandingPage.vue"
  import Navbar from "./components/Navbar.vue"
</script>
<style>

</style>
