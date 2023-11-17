import axios from 'axios'
import { ref } from 'vue'
import router from '../router'

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
  async function createPost(data) {
    try {
      await axios
        .post('api/post', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(() => {
          router.push('/dashboard')
        })
    } catch (err) {
      console.log(err)
    }
  }
    async function postComment(data) {
      try {
        await axios.post('api/comment', data)
      } catch (err) {
        console.log(err)
      }
    }
    return {
      posts,
      liked,
      likeCount,
      suggestions,
      isLoading,
      getDashboard,
      createPost,
      postComment
    }
  }
