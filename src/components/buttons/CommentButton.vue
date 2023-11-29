<script setup>
import {inject} from 'vue'
const post = inject('post')
</script>

<template>
  <span class="comment">
    <div @click="$router.push({ name: 'post', params:{id: post.id} })">
      <span><img src="/icons/comment.png" alt="" /></span>
    </div>
  </span> 
</template>
