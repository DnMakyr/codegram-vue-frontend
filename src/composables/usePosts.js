import axios from "axios";
import { ref } from "vue";

export default function usePosts() {
    const posts = ref({})
    const suggestions = ref({})
    const isLoading = ref(false)
    async function getDashboard(){
        try {
            isLoading.value = true
            const res = await axios.get('api/dashboard')
            posts.value = res.data.posts
            suggestions.value = res.data.suggestions
            console.log(posts.value, suggestions.value)
        } catch (err) {
            console.log(err)
        }
        finally {
            isLoading.value = false
        }
    }
    return { posts, suggestions, isLoading, getDashboard }
}