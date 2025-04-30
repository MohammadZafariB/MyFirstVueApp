<template>
  <div class="cardContainer">
    <div class="picture">
      <img :src="product.picturePath" alt="" class="pic" />
    </div>
    <div class="detailsContainer">
      <h1>{{ product.name }}</h1>
      <h3>{{ product.price }} $</h3>
      <div class="details" v-if="showDetails">{{ product.details }}</div>
      <el-button
        class="showLess"
        v-show="showDetails"
        @click="toggleShowDetails"
        >Show Less</el-button
      >
      <el-button
        class="showMore"
        v-show="!showDetails"
        @click="toggleShowDetails"
        >Show More
      </el-button>
    </div>
    <div class="bottomSection">
      <div class="addToCartSection">
        <div class="addToCartContainer">
          <h3>choose the amount : {{ number }}</h3>
          <div class="buttonsContainer">
            <div class="buttons">
              <el-button type="success" @click="handleIncrease"
                >increase +1</el-button
              >
              <el-button type="success" @click="handleDecrese"
                >decrease -1</el-button
              >
            </div>
            <el-button @click="handleAddToCart">add to cart</el-button>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        @click="toggleIsFav"
        :class="isfav ? 'liked' : 'heart'"
      > 
      <!-- WHY THE HEART DOESN'T CHANGE COLOR? -->
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const number = ref(0);
function handleIncrease() {
  number.value += 1;
}
function handleDecrese() {
  number.value -= 1;
}

const { product } = defineProps({
  product: Object,
});
const isfav = ref(product.isfav);
const toggleIsFav = () => {
    emit("toggle-isfav", product)
    
  console.log(product)
};

const showDetails = ref(true);
function toggleShowDetails() {
  showDetails.value = !showDetails.value;
}

const emit = defineEmits(["add-to-cart" , "toggle-isfav"]);

function handleAddToCart() {
  emit("add-to-cart", product);
}
</script>

<style scoped>
.addToCartContainer {
  max-width: 20rem;
}
.el-button {
  width: 5rem;
}
.cardContainer {
  margin-bottom: 2rem;
  width: 35rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 20%;
  background-color: antiquewhite;
}

.cardContainer:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.picture {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.pic {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
}

.detailsContainer {
  width: 100%;
  text-align: center;
}

.details {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.toggleButton {
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.bottomSection {
  display: flex;
  width: 16rem;
  align-items: center;
  justify-content: center;
}

.heart,
.liked {
  flex: 2;
  transition: transform 0.2s ease, fill 0.3s ease;
}
.heart,
.liked :hover {
  cursor: pointer;
}

.addToCartSection {
  flex: 12;
}
.liked {
  fill: red;
  flex: 2;
}
.heart {
  fill: none;
}
.buttonsContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.buttons {
  margin-bottom: 1rem;
}
</style>
