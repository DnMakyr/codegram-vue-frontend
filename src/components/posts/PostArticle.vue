<script setup>
import { provide } from 'vue'
import ArticleBody from './ArticleBody.vue'
import ArticleHeader from './ArticleHeader.vue'
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
})
provide('post', props.post)

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
      <article-body />
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
