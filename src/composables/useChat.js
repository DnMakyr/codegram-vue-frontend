import { ref } from "vue";
import axios from "axios";

export const useChat = () => {
    const chats = ref({});
    const isLoading = ref(false);
    async function getChats() {
        try {
            isLoading.value = true;
            const res = await axios.get("/api/chat");
            chats.value = res.data.conversations;
        } catch (err) {
            console.log(err);
        } finally {
            isLoading.value = false;
        }
    }
    return { chats, isLoading, getChats };
}