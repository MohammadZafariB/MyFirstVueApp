<template >
<div class="addToCartContainer">

  <h3>choose 
      the amount : {{number}} </h3> 
  <el-button type="success" @click="handleIncrease">increase +1</el-button>
  <el-button type="success" @click="handleDecrese">decrese -1</el-button>
  
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
<style scoped>
  .addToCartContainer{
    max-width: 20rem;
  }
  .el-button{
    width: 5rem;
  }
</style>
