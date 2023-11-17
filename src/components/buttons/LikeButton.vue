<script setup>
import { inject } from 'vue'

const post = inject('post')

</script>

<template>
  <span class="like" @click="like">
    <div>
      <span
        ><img :src="post.liked ? '/icons/red_heart.png' : '/icons/heart.png'" alt=""
      /></span>
    </div>
  </span>
</template>
<style scoped>
.like:hover {
  cursor: pointer;
  filter: contrast(80%);
}
</style>
