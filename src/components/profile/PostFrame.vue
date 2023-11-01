<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="col-4 p-1">
      <img :src="'http://localhost:8000/storage/'+post.image" alt="post" />
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
