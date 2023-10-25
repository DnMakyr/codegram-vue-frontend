<script setup>
import axios from 'axios'
let { data } = await axios.get('/api/user')
</script>

<template>
  <div class="flex justify-center">
    <p>{{ data.user }}</p>
  </div>
</template>
