<template>
        <div class="backDrop" @click.self="toggleModal" v-if="showModal" :class="{dark : !theme === 'dark' }" >
            <div class="modal">
                <h1 class="message">{{props.modalMessage}}</h1>
                <el-button type="success" @click="toggleModal">no</el-button>
                <el-button type="danger" @click=";goHome() , toggleModal()" >yes</el-button>
            </div>
        </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/authstore"
import { ref } from "vue"
import {useRouter} from 'vue-router'
const router = useRouter()
const authStore = useAuthStore()
    function goHome() {
  router.push('/')
  console.log("clicked!")
Logout()
}

    function Logout(){
        authStore.logout()
    }

    function toggleModal(){
        showModal.value=!showModal.value
    }

    const showModal = ref(false)

    defineExpose({
        toggleModal
    })
    const props = defineProps({
        modalMessage:String,
        theme:String
    })
    </script>

<style scoped>
    .backDrop{
        top: 0;
        position: fixed;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    .modal{
        width: 600px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius:10px;
    }
    .dark{
        background: black;
    }
</style>