import axios from 'axios'
import { ref } from 'vue'

export default function useFriend() {
  const recommendations = ref({})
  const isLoading = ref(false)

  const getRecommendations = async () => {
    try {
      isLoading.value = true
      const res = await axios.get('/api/recommend')
      recommendations.value = res.data
    } catch (err) {
      console.log(err)
    } finally {
      isLoading.value = false
    }
  }
  const sendRequest = async (id) => {
    try {
      axios.post(`/api/friend/${id}/add`)
    } catch (err) {
      console.log(err)
    }
  }
  const cancelRequest = async (id) => {
    try {
      await axios.post(`/api/friend/${id}/cancel`)
    } catch (err) {
      console.log(err)
    }
  }
  const acceptRequest = async (id) => {
    try {
      await axios.post(`/api/friend/${id}/accept`)
    } catch (err) {
      console.log(err)
    }
  }
  const rejectRequest = async (id) => {
    try {
      await axios.post(`/api/reject/${id}`)
    } catch (err) {
      console.log(err)
    }
  }
  const unfriend = async (id) => {
    try {
      await axios.post(`/api/friend/${id}/unfriend`)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    recommendations,
    isLoading,
    getRecommendations,
    sendRequest,
    acceptRequest,
    rejectRequest,
    unfriend,
    cancelRequest
  }
}
