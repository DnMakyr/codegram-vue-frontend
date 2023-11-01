import axios from 'axios'
import { ref } from 'vue'

export default function usePosts() {
  const posts = ref({})
  const liked = ref({})
  const likeCount = ref({})
  const suggestions = ref({})
  const isLoading = ref(false)
  async function getDashboard() {
    try {
      isLoading.value = true
      const res = await axios.get('api/dashboard')
      posts.value = res.data.posts
      liked.value = res.data.liked
      likeCount.value = res.data.likeCount
      suggestions.value = res.data.suggestions
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  return { posts, liked, likeCount, suggestions, isLoading, getDashboard }
}
