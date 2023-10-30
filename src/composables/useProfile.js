import axios from 'axios'
import { ref } from 'vue'
import router from '../router'
export default function useProfile() {
  const user = ref({})
  const profile = ref({})
  const posts = ref({})
  const statistics = ref({})
  const isLoading = ref(false)

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
      profile.value = res.data.profile
      posts.value = res.data.posts
    } catch (err) {
      console.log(err)
    }
    finally {
      isLoading.value = false
    }
  }
  async function updateProfile(id, data) {
    try {
      await axios.patch(`api/profile/${id}/update`, data).then(() => {
        router.push('/profile/'+id)
      })
    } catch (err) {
      console.log(err)
    }
  }
  return { user, statistics, profile, posts, isLoading, getProfile, updateProfile }
}
