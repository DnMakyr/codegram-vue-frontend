<script setup>
import { shallowRef, onMounted, provide } from 'vue'
import useProfile from '../../composables/useProfile'
import ProfileBio from '../../components/profile/ProfileBio.vue'
import { useAuthStore } from '../../stores/auth'
import LoadingBar from '../../components/LoadingBar.vue'
import ProfilePostsDisplay from '../../components/profile/ProfilePostsDisplay.vue'
import FriendList from '../../components/profile/FriendList.vue'
import SwitchBar from '../../components/profile/SwitchBar.vue'
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
const IsComponent = shallowRef(ProfilePostsDisplay)

const chooseComponent = (component) => {
  if (component === 'Profile') {
    IsComponent.value = ProfilePostsDisplay
  } else if (component === 'Friends') {
    IsComponent.value = FriendList
  }
}
// const id = toRef(props, 'id')

// watchEffect(() => {
//   getProfile(id.value)
// })

provide('id', props.id)
</script>

<template>
  <loading-bar v-if="isLoading" />
  <div class="container-xl pt-4" style="padding-left: 17.438rem; padding-right: 5rem" v-else>
    <profile-bio
      v-if="user && statistics && authId"
      :statistics="statistics"
      :user="user"
      :authId="authId"
    />
    <switch-bar @chooseComponent="chooseComponent" />
    <keep-alive>
      <component :is="IsComponent" :posts="posts" :id="authId" />
    </keep-alive>
  </div>
</template>
