<script setup>
import { onMounted } from 'vue'
import { useChat } from '../../composables/useChat'
import { useAuthStore } from '../../stores/auth'

const authId = useAuthStore().userId
const { chats, getChats } = useChat()

onMounted(async () => {
  console.log('mounted')

  // Fetch chats and wait for them to be populated
  await getChats()

  // Now, check if chats.value is an array before using map

  chats.value.map((chat) => {
    if (chat.participant_1.id == authId) {
      console.log(chat.participant_1.username)
    }
  })
})
</script>
<template>
  <div class="card">
    <div class="card-header">Chat List</div>
    <div class="card-body tw-space-y-3">
      <div class="tw-flex tw-items-center" v-for="chat in chats" :key="chat.id">
        <img :src="'http://localhost:8000/storage/'+ chat.participant_2.profile.image" alt="">
        <div >{{ chat.participant_2.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  font-size: 1.2rem;
  font-weight: 600;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  height: 85vh;
}
img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>
