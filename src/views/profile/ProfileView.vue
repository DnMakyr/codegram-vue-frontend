<script setup>
import { onMounted } from 'vue'
import useProfile from '/src/composables/useProfile'
import ProfileBio from '/src/components/profile/ProfileBio.vue'
import LoadingSpinner from '/src/components/LoadingSpinner.Vue'
import { useAuthStore } from '/src/stores/auth'
import ProfilePostsDisplay from '../../components/profile/ProfilePostsDisplay.vue'

const { statistics, user, isLoading, posts, getProfile } = useProfile()

const authId = useAuthStore().userId

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
onMounted(() => {
  getProfile(props.id)
})
</script>

<template>
  <loading-spinner style="padding-left: 10rem" v-if="isLoading" />
  <div class="container-xl pt-4" style="padding-left: 17.438rem; padding-right: 5rem" v-else>
    <profile-bio :statistics="statistics" :user="user" :authId="authId" />
    <profile-posts-display :posts="posts" />
  </div>
</template>
