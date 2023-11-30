import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '../stores/auth'

const toast = useToast()

export default function useNotifications() {
  const newNotifications = ref(false)
  const notifications = ref([])
  const isLoading = ref(false)
  const getNotifications = async () => {
    try {
      isLoading.value = true
      const { data } = await axios.get('/api/notifications')
      notifications.value = data.notifications
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  window.Echo.channel('user-' + useAuthStore().userId).listen('.notification', (e) => {
    newNotifications.value = true
    if (e.action === 'comment') {
      toast.info(`${e.sender?.username} commented on your post!`, {
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: 'button',
        icon: false,
        rtl: false
      })
    } else if (e.action === 'like') {
      toast.success(`${e.sender?.username} liked your post!`, {
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: 'button',
        icon: false,
        rtl: false
      })
    } else if (e.action === 'request') {
      toast(`${e.sender.username} want to be your friend!`, {
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: 'button',
        icon: false,
        rtl: false
      })
    } else if (e.action === 'accepted') {
      toast.success(`${e.sender.username} accepted your request!`, {
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: 'button',
        icon: false,
        rtl: false
      })
    }
  })
  return { notifications, newNotifications, commentEcho, getNotifications }
}
