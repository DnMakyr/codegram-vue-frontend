<script setup>
import { ref, onMounted } from 'vue'
import { useChat } from '../composables/useChat'
import { useAuthStore } from '../stores/auth'
import ChatWindow from '../components/chat/ChatWindow.vue'
import ChatList from '../components/chat/ChatList.vue'
import LandingWindow from '../components/chat/LandingWindow.vue'
import LoadingBar from '../components/LoadingBar.vue'

const isOpen = ref(false)
const currentChatId = ref(null)
const authId = useAuthStore().userId
const { chats, isLoading, getChats } = useChat()
const receiverNames = ref([])
const avatars = ref([])
onMounted(async () => {
  await getChats()

  chats.value.map((chat) => {
    if (chat.participant_1.id == authId) {
      receiverNames.value.push(chat.participant_2.name)
      avatars.value.push(chat.participant_2.profile.image)
    } else {
      receiverNames.value.push(chat.participant_1.name)
      avatars.value.push(chat.participant_1.profile.image)
    }
  })
})

function openChat(id) {
  isOpen.value = true
  currentChatId.value = id
}
function closeChat() {
  isOpen.value = false
  currentChatId.value = null
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <loading-bar v-if="isLoading" />
        <chat-list
          v-else
          :chats="chats"
          :receiverNames="receiverNames"
          :avatars="avatars"
          @openChat="openChat"
        />
      </div>
      <div class="col-9">
        <landing-window v-if="!isOpen" />
        <chat-window :chatId="currentChatId" :key="currentChatId" @closeChat="closeChat" v-else />
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding-left: 14rem;
  padding-top: 3rem;
}
</style>
