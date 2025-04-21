<template>
<div class="productsContainer"   >
    <Card v-for="(product,index) in Products" :key= "index" :product="product" class="cardComponent"/>
    <button @click="toggleModal">toggle modal</button>
</div>
</template>

<script setup>
    import Card from "./Card.vue"
      const Products=[
        {
        name:"TShirt", picturePath :"public/shirt.svg" , price: 99, id:1 , isfav:false
        },
        {
        name: "TShirt", picturePath : "public/shirt.svg" , price: 19 , id:2 ,isfav:false
        },
        {
        name:"TShirt", picturePath:"public/shirt.svg" , price: 119 , id:3 , isfav:false
        },
        {
        name:"TShirt", picturePath:"public/shirt.svg" , price: 98 , id:4 , isfav:false
        }
        ,
        {
        name:"TShirt", picturePath:"public/shirt.svg" , price: 98 , id:4 , isfav:false
        }
        ,
        {
        name:"TShirt", picturePath:"public/shirt.svg" , price: 98 , id:4 , isfav:false
        }
    ]
    

</script>

<style>
.cardComponent{
    width: 20%;
}

</style>