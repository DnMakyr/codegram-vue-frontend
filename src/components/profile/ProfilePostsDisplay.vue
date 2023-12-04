<script setup>
import PostFrame from './PostFrame.vue';
defineProps({
    posts: {
        type: Object,
        required: true
    }
})
</script>

<template>
        <div class="row pt-4">
            <post-frame v-for="post in posts" :key="post.id" :post="post" />
        </div>
</template>