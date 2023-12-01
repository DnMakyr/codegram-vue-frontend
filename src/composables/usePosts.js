import axios from 'axios'
import { ref } from 'vue'
import router from '../router'

export default function usePosts() {
  const posts = ref({})
  const suggestions = ref({})
  const isLoading = ref(false)
  const caption = ref('')
  const imgSrc = ref('')
  const user = ref({})
  const comments = ref([])
  const liked = ref(false)
  const likeCount = ref(0)

  async function getDashboard() {
    try {
      isLoading.value = true
      const res = await axios.get('api/dashboard')
      posts.value = res.data.posts
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
        .post('api/post/store ', data, {
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
  async function getSpecificPost(id) {
    try {
      isLoading.value = true
      const res = await axios.get(`api/post/${id}`)
      user.value = res.data.post.user
      caption.value = res.data.post.caption
      imgSrc.value = res.data.post.image
      comments.value = res.data.post.comments
      liked.value = res.data.post.liked
      likeCount.value = res.data.post.likeCount
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
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
    suggestions,
    isLoading,
    user,
    caption,
    imgSrc,
    comments,
    liked,
    likeCount,
    getDashboard,
    createPost,
    getSpecificPost,
    postComment
  }
}
