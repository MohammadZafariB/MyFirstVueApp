<template>
  <div class="Navbar">
    <div class="rightSection">
      <!-- You can put logo or other stuff here -->

      <button class="button" @click="openModal">Exit account</button>
    </div>
    <div class="leftSection">
      <router-link to="/login">
        <button class="button" @click="console.log(d)">Login</button>
      </router-link>
    </div>
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
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;

  z-index: 999;
}

.rightSection {
  display: flex;
  align-items: center;
}

.leftSection {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  cursor: pointer;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 2rem;
}

.loginButton:hover {
  background-color: #45a049;
}
</style>
