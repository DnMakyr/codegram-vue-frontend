<script setup>
import { onMounted, inject } from 'vue'
import useProfile from '../../composables/useProfile'
import LoadingBar from '../LoadingBar.vue'
import FriendDiv from './FriendDiv.vue'
import router from '../../router'
import { useAuthStore } from '../../stores/auth'

const authId = useAuthStore().userId
const id = inject('id')

const { friends, isLoading, getFriends } = useProfile()

onMounted(() => {
  getFriends(id)
  console.log(friends.value.length)
})
</script>

<template>
  <div>
    <loading-bar v-if="isLoading" />
    <div class="tw-pt-4" v-else>
      <div class="row" v-if="friends.length > 0">
        <friend-div v-for="(friend, index) in friends" :key="index" :friend="friend" />
      </div>
      <div class="tw-flex tw-justify-center tw-items-center tw-pt-4" v-else>
        <span v-if="authId == id">
          Don't have friends? Make some in the
          <span
            class="tw-text-blue-500 hover:tw-underline tw-cursor-pointer"
            @click="router.push({ name: 'explore' })"
            >Explore</span
          >
          page!</span
        >
      </div>
    </div>
  </div>
</template>
