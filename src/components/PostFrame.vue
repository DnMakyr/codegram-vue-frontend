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
      <img src="/img/download (12).jpg" alt="post" />
  </div>    
</template>

<style scoped>
img {
  border-collapse: separate;
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}

</style>
