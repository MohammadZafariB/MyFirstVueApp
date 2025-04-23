<template>
        <div class="backDrop" @click.self="toggleModal" v-if="showModal" :class="{dark : !theme === 'dark' }" >
            <div class="modal">
                <h1 class="message">{{props.modalMessage}}</h1>
                <button @click="toggleModal">no</button>
                <button @click="goHome() ; toggleModal()" >yes</button>
            </div>
        </div>
</template>

<script setup>
import { ref } from "vue"
import {useRouter} from 'vue-router'

const router = useRouter()

    function goHome() {
  router.push('/')
  console.log("clicked!")
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

<style>
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