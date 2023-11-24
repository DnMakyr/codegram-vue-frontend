<script setup>
import { onMounted } from 'vue'
import { useChat } from '../../composables/useChat'
import LoadingBar from '../LoadingBar.vue'
import ChatContainer from './ChatContainer.vue'
import ChatInput from './ChatInput.vue'
const props = defineProps({
  chatId: {
    type: Number,
    required: true
  }
})

const { messages, replier, isLoading, getMessages } = useChat()
const authId = JSON.parse(sessionStorage.getItem('auth')).userId

onMounted(async () => {
  window.Echo.channel('chat-' + props.chatId).listen('.message', (newMessage) => {
    messages.value.push(newMessage)
    console.log(typeof newMessage.sender)
  })
  await getMessages(props.chatId)
})
</script>

<template>
  <loading-bar v-if="isLoading" />
  <div class="card" v-else>
    <div class="card-header">
      <div class="tw-flex tw-space-x-1">
        <img
          :src="`http://localhost:8000/storage/${replier.profile?.image}`"
          class="tw-rounded-full tw-w-10 tw-h-10 tw-object-cover"
          alt="avatar"
        /><span>
          {{ replier.name }}
        </span>
      </div>
    </div>
    <div class="card-body tw-bg-red-300">
      <chat-container :messages="messages" :authId="authId" />
    </div>
    <div class="card-footer">
      <chat-input :chatId="props.chatId" />
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 85vh;
}
.card-header {
  height: 3.5rem;
}
</style>
