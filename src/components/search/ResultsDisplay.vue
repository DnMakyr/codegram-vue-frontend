<script setup>
import PostDisplay from './PostDisplay.vue'
import UserDisplay from './UserDisplay.vue'
defineProps({
  results: {
    type: Object
  }
})
</script>

<template>
  <div class="row">
    <!-- Users Section -->
    <user-display :results="results" />
    <!-- Posts Section with Columns -->
    <post-display :results="results" />
  </div>
</template>
