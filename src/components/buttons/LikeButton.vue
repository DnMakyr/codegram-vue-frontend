<script setup>
import { inject } from 'vue'

const liked = inject('liked')
const post = inject('post')
// const isLiked = ref()
// let src = computed(() => {
//   return isLiked.value ? '/icons/red_heart.png' : '/icons/heart.png'
// })
// function like() {
//   isLiked.value = !isLiked.value
// }
</script>

<template>
  <span class="like" @click="like">
    <div>
      <span
        ><img :src="liked[post.id] ? '/icons/red_heart.png' : '/icons/heart.png'" alt=""
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
