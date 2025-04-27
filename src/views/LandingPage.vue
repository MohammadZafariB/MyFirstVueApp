<template>
    <SaleCountdown hour=1 minute=0 second=2 />
<div class="productsContainer"   >
    <Card v-for="(product,index) in Products" :key= "index" :product="product" />
</div>
</template>

<script setup>
    import SaleCountdown from "../components/SaleCountdown.vue"
    import Card from "../components/Card.vue"
      const Products=[
        {
        name:"TShirt", picturePath :"shirt.svg" , price: 99, id:1 , isfav:false
        },
        {
        name: "TShirt", picturePath :"shirt.svg" , price: 19 , id:2 ,isfav:false
        },
        {
        name:"TShirt", picturePath:"shirt.svg" , price: 119 , id:3 , isfav:false
        },
        {
        name:"TShirt", picturePath:"shirt.svg" , price: 98 , id:4 , isfav:false
        }
        ,
        {
        name:"TShirt", picturePath:"shirt.svg" , price: 98 , id:5 , isfav:false
        }
        ,
        {
        name:"TShirt", picturePath:"shirt.svg" , price: 98 , id:6 , isfav:false
        }
    ]
    

</script>

<style>

.productsContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
}

</style>