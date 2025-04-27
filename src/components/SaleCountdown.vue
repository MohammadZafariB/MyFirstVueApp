<template>
  <div v-if="isCounting" class="saleCountdownContainer">
    <h1>Up To 70% Off</h1>
    <h1 class="time">
      Time Remaining: {{ saleTimeHoures }}:{{ saleTimeMinutes }}:{{
        saleTimeSecond
      }}
    </h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const props = defineProps({ hour: Number, minute: Number, second: Number });
let saleTimeSecond = ref(props.second);
let saleTimeMinutes = ref(props.minute);
let saleTimeHoures = ref(props.hour);

let intervalId = null;
let isCounting = ref(true)
function updateSaleTime() {
  saleTimeSecond.value = saleTimeSecond.value - 1;
  if (saleTimeSecond.value < 0) {
    saleTimeSecond.value = 59;
    saleTimeMinutes.value -= 1;

    if (saleTimeMinutes.value < 0) {
      saleTimeMinutes.value = 59;
      saleTimeHoures.value -= 1;

      if (saleTimeHoures.value < 0) {
        saleTimeHoures.value = 0;
        saleTimeMinutes.value = 0;
        saleTimeSecond.value = 0;
        clearInterval(intervalId);
      }
    }
  }
   if (
    saleTimeSecond.value === 0 &&
    saleTimeMinutes.value === 0 &&
    saleTimeHoures.value === 0
  ) {
    clearInterval(intervalId);
    isCounting=!isCounting
  }
}
onMounted(() => {
  intervalId = setInterval(() => updateSaleTime(), 1000);
});
</script>

<style scoped>
.saleCountdownContainer {
  display: flex;
  justify-content: center;
  background-color: antiquewhite;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 0;
}
h1 {
  font-size: 7rem;
  margin: 1rem;
}
.time {
  font-size: 4rem;
  color: rgb(153, 30, 30);
}
</style>