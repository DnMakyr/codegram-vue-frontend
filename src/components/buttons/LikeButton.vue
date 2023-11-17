<script setup>
import axios from 'axios'
import { ref, inject } from 'vue'

const post = inject('post')

const likeStatus = ref(post.liked)

async function like() {
  if (likeStatus.value === true) {
    await axios.post(`api/unlike/${post.id}`).then(() => {
      likeStatus.value = !likeStatus.value
    })
  } else {
    await axios.post(`api/like/${post.id}`).then(() => {
      likeStatus.value = !likeStatus.value
    })
  }
}
</script>

<template>
  <span class="like" @click="like">
    <div>
      <span
        ><img :src="likeStatus ? '/icons/red_heart.png' : '/icons/heart.png'" alt=""
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
