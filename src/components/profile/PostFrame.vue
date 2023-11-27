<script setup>
import { ref } from 'vue'
import PostOverlay from '../posts/PostOverlay.vue'
defineProps({
  post: {
    type: Object,
    required: true
  }
})
const showModal = ref(false)
function toggle() {
  showModal.value = !showModal.value
}
function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div class="col-4 p-1">
    <img :src="'http://localhost:8000/storage/' + post.image" alt="post" @click="toggle" />
    <post-overlay v-if="showModal" :postId="post.id" @closeModal="closeModal" :key="post.id"/>
  </div>
</template>

<style scoped>
img {
  border-collapse: separate;
  width: 20rem !important;
  height: 20rem !important;
  object-fit: cover;
}
</style>
