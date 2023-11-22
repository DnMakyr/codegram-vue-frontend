<script setup>
import ChatPopup from './ChatPopup.vue'
import { ref } from 'vue'

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="card">
    <span class="chat-icon"><img src="/icons/messenger.png" alt="" /></span>
    <div class="text">
      <span>Hey! You want to chat with someone you know?</span>
      <span>Click on this button!</span>
      <button class="btn btn-outline-secondary" @click="openModal">Create a conversation</button>
      <chat-popup :showModal="showModal" @closeModal="closeModal" />
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 85vh;
  display: flex;
  align-items: center;
  .chat-icon {
    width: 10rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: #e9ecef;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
  padding-top: 8rem;
}
.text {
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
