import axios from 'axios'
import { ref } from 'vue'
import router from '../router'

export default function useProfile() {
  const user = ref({})
  const profile = ref({})
  const posts = ref({})
  const statistics = ref({})
  const isLoading = ref(false)
  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }
  async function getProfile(id) {
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
  async function updateProfile(id, data) {
    try {
      await axios
        .post(`api/profile/${id}/update`, data, config, {
          _method: 'PATCH'
        })
        .then(() => {
          
          router.push('/profile/' + id)
        })
    } catch (err) {
      if (err.response.status === 403) {
        alert(err.response.data.message)
      }
    }
  }
  return { user, statistics, profile, posts, isLoading, getProfile, updateProfile }
}
