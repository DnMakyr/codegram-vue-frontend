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
    <div class="row p-2" style="border-bottom: 1px solid rgb(146, 144, 144);"></div>
        <div class="row pt-4">
            <post-frame v-for="post in posts" :key="post.id" :post="post" />
        </div>
</template>