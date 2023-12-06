import axios from 'axios'
import { ref } from 'vue'
import router from '../router'
import { useAuthStore } from '../stores/auth'

export default function usePosts() {
  const posts = ref([])
  const page = ref(1)
  const noMorePosts = ref(false)
  const suggestions = ref([])
  const isLoading = ref(false)
  const caption = ref('')
  const imgSrc = ref('')
  const user = ref({})
  const comments = ref([])
  const liked = ref(false)
  const likeCount = ref(0)
  const authId = useAuthStore().userId

  const getDashboard = async () => {
    try {
      isLoading.value = true
      const res = await axios.get(`api/dashboard/?page=${page.value}`)
      posts.value = res.data.posts.data
      suggestions.value = res.data.suggestions
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  const getMorePosts = async () => {
    try {
      if (noMorePosts.value) {
        // If there are no more posts, return early
        return
      }

      page.value++
      const res = await axios.get(`api/dashboard/?page=${page.value}`)

      if (res.data.posts.data.length === 0) {
        // If no new posts, set the flag to true
        noMorePosts.value = true
        return
      }

      posts.value = [...posts.value, ...res.data.posts.data]
    } catch (err) {
      console.log(err)
    }
  }
  const createPost = async (data) => {
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
  const getSpecificPost = async (id) => {
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
  const deletePost = async (id) => {
    try {
      await axios.delete(`api/post/delete/${id}`).then(() => {
        router.push(`/profile/${authId}`)
      })
    } catch (err) {
      console.log(err)
    }
  }
  const postComment = async (data) => {
    try {
      await axios.post('api/comment', data)
    } catch (err) {
      console.log(err)
    }
  }
  const getComments = async (id) => {
    try {
      const res = await axios.get(`api/comment/${id}`)
      comments.value = res.data.comments
    } catch (err) {
      console.log(err)
    }
  }
  return {
    posts,
    page,
    suggestions,
    isLoading,
    user,
    caption,
    imgSrc,
    comments,
    liked,
    likeCount,
    getDashboard,
    getMorePosts,
    createPost,
    getSpecificPost,
    deletePost,
    postComment,
    getComments
  }
}
