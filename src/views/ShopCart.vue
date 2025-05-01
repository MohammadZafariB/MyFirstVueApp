<template>
  <div class="cardContainer">
    <div v-if="cartStore.cart.length === 0">Your cart is Empty!</div>
    <Card
      v-for="(item, index) in cartStore.cart"
      :key="index"
      :product="item"
    />
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cartStore";
import Card from "../components/Card.vue";

const cartStore = useCartStore();
// const props = defineProps({
//   cartItems: Array,
// });
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