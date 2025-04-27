<template>
  <SaleCountdown hour="1" minute="0" second="2" />
  <div class="productsContainer">
    <Card
      v-for="(product, index) in Products"
      :key="index"
      :product="product"
       @add-to-cart="handleAddProduct"
    />
    <ShopCart />
  </div>
</template>

<script setup>
import SaleCountdown from "../components/SaleCountdown.vue";
import Card from "../components/Card.vue";
import ShopCart from "../components/ShopCart.vue";
import { ref } from "vue";
let cartItems = ref([]);
function handleAddProduct(product) {
  cartItems.value.push(product) ;
  
  console.log(cartItems);
}
const Products = [
  {
    name: "TShirt",
    picturePath: "/shirt.svg",
    price: 99,
    id: 1,
    isfav: false,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eaque, aliquam necessitatibus modi natus quasi eos velit molestiae dolorem perferendis, similique, qui sunt asperiores architecto? Explicabo ad ratione eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a ab repellendus molestiae, reprehenderit itaque exercitationem rem sint earum labore nam assumenda debitis recusandae temporibus aliquid laborum sunt. Possimus, est.",
  },
  {
    name: "TShirt",
    picturePath: "/shirt.svg",
    price: 19,
    id: 2,
    isfav: false,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eaque, aliquam necessitatibus modi natus quasi eos velit molestiae dolorem perferendis, similique, qui sunt asperiores architecto? Explicabo ad ratione eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a ab repellendus molestiae, reprehenderit itaque exercitationem rem sint earum labore nam assumenda debitis recusandae temporibus aliquid laborum sunt. Possimus, est.",
  },
  {
    name: "TShirt",
    picturePath: "/shirt.svg",
    price: 119,
    id: 3,
    isfav: false,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eaque, aliquam necessitatibus modi natus quasi eos velit molestiae dolorem perferendis, similique, qui sunt asperiores architecto? Explicabo ad ratione eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a ab repellendus molestiae, reprehenderit itaque exercitationem rem sint earum labore nam assumenda debitis recusandae temporibus aliquid laborum sunt. Possimus, est.",
  },
  {
    name: "TShirt",
    picturePath: "/shirt.svg",
    price: 98,
    id: 4,
    isfav: false,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eaque, aliquam necessitatibus modi natus quasi eos velit molestiae dolorem perferendis, similique, qui sunt asperiores architecto? Explicabo ad ratione eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a ab repellendus molestiae, reprehenderit itaque exercitationem rem sint earum labore nam assumenda debitis recusandae temporibus aliquid laborum sunt. Possimus, est.",
  },
  {
    name: "TShirt",
    picturePath: "/shirt.svg",
    price: 98,
    id: 5,
    isfav: false,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eaque, aliquam necessitatibus modi natus quasi eos velit molestiae dolorem perferendis, similique, qui sunt asperiores architecto? Explicabo ad ratione eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a ab repellendus molestiae, reprehenderit itaque exercitationem rem sint earum labore nam assumenda debitis recusandae temporibus aliquid laborum sunt. Possimus, est.",
  },
  {
    name: "TShirt",
    picturePath: "/shirt.svg",
    price: 98,
    id: 6,
    isfav: false,
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere deserunt eaque, aliquam necessitatibus modi natus quasi eos velit molestiae dolorem perferendis, similique, qui sunt asperiores architecto? Explicabo ad ratione eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a ab repellendus molestiae, reprehenderit itaque exercitationem rem sint earum labore nam assumenda debitis recusandae temporibus aliquid laborum sunt. Possimus, est.",
  },
];
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