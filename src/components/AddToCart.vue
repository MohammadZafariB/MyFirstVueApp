<template >
<div class="addToCartContainer">

  <h3>choose 
      the amount : {{number}} </h3> 
  <button @click="handleIncrease">increase +1</button>
  <button @click="handleDecrese">decrese -1</button>
  
</div>
</template>

<script setup>
import { ref } from 'vue'

 

  const number = ref(0)
  function handleIncrease (){
    number.value +=1
  }
  function handleDecrese (){
     number.value -=1

  }



  
  
</script>
<style>
  .addToCartContainer{
    max-width: 20rem;
  }
</style>
