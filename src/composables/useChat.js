import { ref } from 'vue'
import axios from 'axios'

export const useChat = () => {
  const chats = ref({})
  const messages = ref({})
  const isLoading = ref(false)
  const replier = ref({})

  const getChats = async () => {
    try {
      isLoading.value = true
      const res = await axios.get('/api/chat')
      chats.value = res.data.conversations
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  const getMessages = async (id) => {
    try {
      isLoading.value = true
      const res = await axios.post(`/api/chat/load/${id}`)
      messages.value = res.data.messages
      replier.value = res.data.replier
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  const sendMessage = async (data) => {
    try {
      await axios.post(`/api/chat/send/`, data)
    } catch (err) {
      console.log(err)
    }
  }
  return { chats, isLoading, messages, replier, getChats, getMessages, sendMessage }
}
