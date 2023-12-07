<script setup>
import { provide, onMounted } from 'vue'
import ArticleBody from './ArticleBody.vue'
import ArticleHeader from './ArticleHeader.vue'
import usePosts from '../../composables/usePosts'

const { comments, getComments } = usePosts()

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
provide('post', props.post)
onMounted(() => {
  getComments(props.post.id)
})
const newComment = () => {
  getComments(props.post.id)
}
</script>

<template>
  <article class="tw-block" style="width: 29.375rem">
    <div class="outer">
      <article-header :post="post" />
      <div class="post-image">
        <img
          :src="'http://localhost:8000/storage/' + post.image"
          alt="image"
          style="border-radius: 5px"
        />
      </div>
      <article-body :comments="comments" @commented="newComment" />
    </div>
  </article>
</template>

<style scoped>
article {
  font-size: 14px;
}
.outer {
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: solid 1px #dbdbdb;
}
</style>
