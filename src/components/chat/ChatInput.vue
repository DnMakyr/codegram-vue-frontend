<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useChat } from '../../composables/useChat'

const { sendMessage } = useChat()

const props = defineProps(['chatId'])

const senderId = useAuthStore().userId

const message = ref({
  content: '',
  sender: senderId,
  chatId: props.chatId
})

function send() {
  if (!message.value.content.trim()) {
    return
  } else {
    console.log('Sending message:', message.value) // Add this line for debugging
    sendMessage(message.value)
    message.value.content = ''
  }
}
</script>

<template>
  <div>
    <form class="tw-space-x-2" @submit.prevent="send">
      <input class="tw-w-11/12 tw-py-1 focus:tw-outline-blue-400 tw-border-solid tw-border-2 tw-rounded-sm tw-border-black" v-model="message.content" />
      <button type="submit" class="tw-bg-blue-600 tw-text-white tw-p-1 tw-rounded-sm">Send</button>
    </form>
  </div>
</template>
