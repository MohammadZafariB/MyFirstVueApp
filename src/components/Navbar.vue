<template>
  <div class="Navbar">
    <!-- You can put logo or other stuff here -->

    <button class="button" @click="openModal">Exit account</button>

    <div>
      <router-link to="/shop">
        <button class="button">Shopping Cart</button>
      </router-link>
    </div>
    <div>
      <router-link to="/favorite">
        <button class="button">Favorite Products</button>
      </router-link>
    </div>

    <router-link to="/login">
      <button class="button">Login</button>
    </router-link>
    <router-link to="/">
      <button class="button">Home</button>
    </router-link>

    <Modal ref="modalRef" modalMessage="wanna leave?" theme="" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
const modalRef = ref(null);

function openModal() {
  modalRef.value.toggleModal();
}
</script>

<style scoped>
.Navbar {
  width: 100%;
  margin: auto;
  background-color: #d8b4a0;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

  z-index: 999;
  border-radius: 3rem;
  margin: 2rem 0;
}

.rightSection {
  display: flex;
  align-items: center;
}

.leftSection {
  display: flex;
  align-items: center;
}
.middleSection {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  cursor: pointer;
}

.button {
  background-color: #333333;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 2rem;
  font: bold;
  border-radius: 4rem;
  width: 12rem;
  height: 4rem;
}

.loginButton:hover {
  background-color: #45a049;
}
.Modal {
  width: 100%;
}
</style>
