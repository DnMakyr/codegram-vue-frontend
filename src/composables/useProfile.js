import axios from 'axios'
import { ref } from 'vue'
import router from '../router'
import { useAuthStore } from '../stores/auth'

export default function useProfile() {
  const user = ref({})
  const profile = ref({})
  const posts = ref({})
  const statistics = ref({})
  const friends = ref([])
  const isLoading = ref(false)
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  const getProfile = async (id) => {
    try {
      isLoading.value = true
      const res = await axios.get('api/profile/' + id)
      user.value = res.data.user
      statistics.value = {
        postCount: res.data.postCount,
        followersCount: res.data.followersCount,
        followingCount: res.data.followingCount
      }
      profile.value = res.data.user.profile
      posts.value = res.data.user.posts
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  const updateProfile = async (id, data) => {
    try {
      await axios
        .post(`api/profile/${id}/update`, data, config, {
          _method: 'PATCH'
        })
        .then((res) => {
          useAuthStore().setAvatar(res.data.newAvatar)
          router.push('/profile/' + id)
        })
    } catch (err) {
      if (err.response.status === 403) {
        alert(err.response.data.message)
      } else {
        console.log(err)
      }
    }
  }
  const getFriends = async (id) => {
    try {
      isLoading.value = true
      const res = await axios.get('api/friends/' + id)
      friends.value = res.data.friends
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    user,
    statistics,
    profile,
    posts,
    isLoading,
    friends,
    getProfile,
    updateProfile,
    getFriends
  }
}
