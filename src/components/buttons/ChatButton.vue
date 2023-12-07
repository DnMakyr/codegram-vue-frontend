<script setup>
import axios from 'axios'
import router from '../../router';
const props = defineProps(['userId'])

async function createChat() {
    await axios.post(`api/chat/create/${props.userId}`).then((res)=>{
        if (res.data.success === 'Existed') {
           router.push(`/chat`)
        }
        else {
            router.push(`/chat`)
           
        }
    })
}
</script>
<template>
    <div>
       <button class="btn btn-primary btn-sm" @click="createChat">Chat</button> 
    </div>
</template> 