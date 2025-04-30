<template>
  <SaleCountdown hour="1" minute="0" second="2" />
  <div class="productsContainer">
    <Card
      v-for="(product, index) in productsStore.products"
      :key="index"
      :product="product"
      @add-to-cart = "addToCart" 
      @toggle-isfav ="addToFavCart"
    />
  </div>
  <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
  <div class="shopCardContainer">
  <h1>Shopping Cart</h1>

  <ShopCart/>
  </div>
  <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
  <h1>Favorite Cart</h1>
    <FavCart/>
</template>

<script setup>
import {useProductsStore} from "../stores/productsStore"
import {useCartStore} from "../stores/cartStore"
import {useFavProductsStore} from "../stores/favProductsStore"
import SaleCountdown from "../components/SaleCountdown.vue";
import Card from "../components/Card.vue";
import ShopCart from "./ShopCart.vue";
import FavCart from "./FavCart.vue";
import {products} from "../data/products.js";
import { ref } from "vue"; 
const productsStore = useProductsStore()
const cartStore = useCartStore()
const favProductsStore = useFavProductsStore()
function addToCart(product) {
  cartStore.addToCart(product)
  console.log("added")
}
function addToFavCart(product){
    product.isfav = !product.isfav;

  if (product.isfav){

    favProductsStore.addToFavCart(product) ;
  } 
  if (!product.isfav){

    favProductsStore.removeFromFavCart(product) ;
  } 
  
  console.log("toggled!!")
}
</script>

<style>

.productsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}
</style>