<script setup>
import { onMounted } from 'vue'
import { useChat } from '../../composables/useChat'
import LoadingSpinner from '../LoadingSpinner.vue'
const { messages, replier, isLoading, getMessages } = useChat()
const authId = JSON.parse(sessionStorage.getItem('auth')).userId
const props = defineProps(['chatId'])
onMounted(async() => {
    // window.Echo.channel('chat-'+authId, (e) => {
    //     console.log(e)
    // })

 await getMessages(props.chatId)
})
</script>

<template>
  <loading-spinner v-if="isLoading" style="padding-bottom: 30px" />
  <div class="card" v-else>
    <div class="card-header">
      <div class="tw-flex tw-space-x-1">
        <img
          :src="`http://localhost:8000/storage/${replier.profile?.image}`"
          class="tw-rounded-full tw-w-10"
          alt="avatar"
        /><span>
          {{ replier.name }}
        </span>
      </div>
    </div>
    <div class="card-body tw-bg-red-300">
      <div v-if="messages.length === 0" class="tw-text-gray-500">No messages available.</div>
      <div v-else v-for="message in messages" :key="message.id">
        <div
          class="tw-p-3 tw-max-w-fit tw-rounded-lg tw-shadow-md tw-my-1"
          :class="
            message.user.id === authId
              ? 'tw-bg-blue-500 tw-text-white tw-ml-auto'
              : 'tw-bg-white tw-text-black'
          "
        >
          {{ message.message }}
        </div>
      </div>
    </div>
    <div class="card-footer">
      <form action="" class=" tw-space-x-2">
        <input class="tw-w-11/12 tw-py-1 focus:tw-outline-blue-400" type="text" />
        <button type="submit" class="tw-bg-blue-600 tw-text-white tw-p-1 tw-rounded-sm">
          Send
        </button>
      </form>
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
