import axios from "axios";
import { ref } from "vue";

export default function useFriend() {
    const recommendations = ref({});
    const isLoading = ref(false);
    async function getRecommendations() {
        try {
            isLoading.value = true;
            const res = await axios.get("/api/recommend");
            recommendations.value = res.data;
        } catch (err) {
            console.log(err);
        } finally {
            isLoading.value = false;
        }
    }
    return { recommendations, isLoading, getRecommendations };
}