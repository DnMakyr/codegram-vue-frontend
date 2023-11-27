<script setup>
import { onMounted } from 'vue'
import usePosts from '../composables/usePosts'
import LoadingBar from '../components/LoadingBar.vue'
import PostArticle from '@/components/posts/PostArticle.vue'
import SuggestionDiv from '../components/SuggestionDiv.vue'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '../stores/auth'

const toast = useToast()

const { posts, suggestions, isLoading, getDashboard } = usePosts()
onMounted(() => {
  getDashboard()
})
window.Echo.channel('notification-' + useAuthStore().userId).listen('.notification', (e) => {
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
  }
  else if (e.action === 'like') {
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
  }
  else if (e.action === 'request') {
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
  }
  else if (e.action === 'accepted') {
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
</script>

<template>
  <loading-bar v-if="isLoading" />
  <div class="container" style="padding-left: 14rem" v-else>
    <div class="row mb-4"></div>
    <div class="col-7-md mx-auto">
      <div class="row tw-flex">
        <div class="col-8 tw-flex tw-flex-col tw-items-center">
          <post-article v-for="post in posts" :post="post" :key="post.id" />
        </div>
        <div class="col-4" style="max-width: 320px; max-height: 300px; padding-left: 20px">
          Suggested for you
          <suggestion-div :suggestions="suggestions"></suggestion-div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.info {
  height: 18px;
}
article div span {
  font-size: 14px !important;
}
.avatar {
  width: 32rem;
  height: 32rem;
  border-radius: 100%;
}
</style>
