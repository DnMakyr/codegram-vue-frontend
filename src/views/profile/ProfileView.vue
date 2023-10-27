<script setup>
import { onMounted } from 'vue'
import useProfile from '/src/composables/useProfile'
import ProfileBio from '/src/components/ProfileBio.vue'
import LoadingSpinner from '/src/components/LoadingSpinner.Vue'
import { useAuthStore } from '/src/stores/auth';
import ProfilePostsDisplay from '../../components/ProfilePostsDisplay.vue';

const { statistics, user, isLoading, posts ,getProfile } = useProfile()

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
    <loading-spinner v-if="isLoading"/>
  <div class="container-xl pt-4" style="padding-left: 21.438rem; padding-right: 7rem;" v-else>
    <profile-bio :statistics="statistics" :user="user" :authId="authId" />
    <profile-posts-display :posts="posts" />
  </div>
</template>