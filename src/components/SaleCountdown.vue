<template>
  <div class="saleCountdownContainer">
    <h1 >Up To 70% Off</h1>
    <h1 class="time">Time Remaining: {{saleTimeHoures}}:{{saleTimeMinutes}}:{{saleTimeSecond}}</h1>
  </div>
</template>

<script setup>
import { ref , onMounted ,onUnmounted} from "vue"
let saleTimeSecond = ref(5)
let saleTimeMinutes = ref(0)
let saleTimeHoures = ref(2)

let intervalId = null
function updateSaleTime(){
   saleTimeSecond.value = saleTimeSecond.value-1

if (saleTimeSecond.value < 0){ saleTimeMinutes.value-=1 ; saleTimeSecond.value=59}
if (saleTimeMinutes.value < 0){saleTimeSecond.value=59; saleTimeHoures.value-=1 ; saleTimeMinutes.value=59}

 if (saleTimeSecond.value === 0 && saleTimeMinutes.value === 0 && saleTimeHoures.value===0 ){ clearInterval(intervalId)}
}
onMounted(()=>{ intervalId = setInterval(()=>updateSaleTime(),1000)})
onUnmounted(()=>{
clearInterval(intervalId)})

</script>

<style>
.saleCountdownContainer{
    display: flex;
    justify-content: center;
    background-color: antiquewhite;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 0;
}h1{
    font-size: 7rem;
    margin: 1rem;
}
.time{
    font-size: 4rem;
    color: rgb(153, 30, 30);
}

</style>