import { ref } from 'vue'
import axios from 'axios'

export default function useNotifications() {
  const notifications = ref([])
  const unreadCount = ref(0)
  const isLoading = ref(false)
  const getNotifications = async () => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/api/notifications')
      notifications.value = data.notifications
      unreadCount.value = data.unreadNotificationsCount
    } catch (err) { 
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }
  return { notifications, unreadCount, getNotifications }
}
