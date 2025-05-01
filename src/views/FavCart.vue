<template>
  <div v-if="favProductsStore.favCart.length === 0">
    Your favorite Cart is empty
  </div>
  <div class="cardContainer">
    <Card
      v-for="(item, index) in favProductsStore.favCart"
      :key="index"
      :product="item"
    />
    <!-- <div>{{favorites}}</div> -->
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import { useFavProductsStore } from "../stores/favProductsStore.js";
const favProductsStore = useFavProductsStore();
const favorites = favProductsStore.favoriteProducts;
</script>

<style>
.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}
</style>