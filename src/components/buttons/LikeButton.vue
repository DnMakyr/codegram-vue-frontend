<script setup>
import axios from 'axios'
import { ref  } from 'vue'

const props = defineProps(['id', 'liked'])


const likeStatus = ref(props.liked)
const emit = defineEmits(['isLiked'])


async function like() {
  if (likeStatus.value === true) {
    await axios.post(`api/unlike/${props.id}`).then(() => {
      likeStatus.value = !likeStatus.value
      emit('isLiked', -1)
    })
  } else {
    await axios.post(`api/like/${props.id}`).then(() => {
      likeStatus.value = !likeStatus.value
      emit('isLiked', 1)
    })
  }
}
</script>

<template>
  <button class="like" @click="like">
    <div>
      <span
        ><img :src="likeStatus ? '/icons/red_heart.png' : '/icons/heart.png'" alt=""
      /></span>
    </div>
  </button>
</template>
<style scoped>
.like:hover {
  cursor: pointer;
  filter: contrast(80%);
}
</style>
