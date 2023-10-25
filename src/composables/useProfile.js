import axios from 'axios'
import { ref } from 'vue'
export default function useProfile() {
  const profile = ref({})
  const posts = ref({})

  const getSelfProfile = async () => {
    const res = (await axios.get('api/profile/'+1))
    profile.value = res.data.user.profile
    console.log(res.data.user.profile)
  }
  const getSelfPosts = async () => {
    posts.value = await axios.get('api/profile/')
  }
  return { profile, getSelfProfile }
}
