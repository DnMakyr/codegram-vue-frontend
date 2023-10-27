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
    <hr>
    <div class="row p-2"></div>
        <div class="row pt-4">
            <PostFrame v-for="post in posts" :key="post.id" />
        </div>
</template>