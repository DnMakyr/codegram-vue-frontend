<script setup>
import { ref} from 'vue'
defineProps(['chats', 'receiverNames', 'avatars'])
const emit = defineEmits(['openChat'])

const isActive = ref(false)
const activeChatId = ref(null)

function openChat(id) {
  isActive.value = true
  activeChatId.value = id
  emit('openChat', id)
}
</script>
<template>
  <div class="card">
    <div class="card-header">Chat List</div>
    <div class="card-body tw-space-y-3 tw-overflow-y-auto">
      <div
        class="tw-flex tw-items-center user"
        v-for="(chat, index) in chats"
        :key="chat.id"
        @click="openChat(chat.id)"
      >
        <img :src="'http://localhost:8000/storage/' + avatars[index]" alt="avatar" />
        <span :class="{'tw-text-red-600 tw-border-black tw-border-solid': isActive && activeChatId == chat.id}">{{ receiverNames[index] }}</span>
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
  object-fit: cover;
}
.user {
  padding: 8px;
  border-radius: 5px;
}
.user:hover {
  background-color: #e9ecef;
  cursor: pointer;
}
</style>
