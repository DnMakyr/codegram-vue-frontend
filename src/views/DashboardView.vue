<script setup>
import { onMounted } from 'vue'
import usePosts from '../composables/usePosts'
import LoadingBar from '../components/LoadingBar.vue'
import PostArticle from '../components/posts/PostArticle.vue'
import SuggestionDiv from '../components/SuggestionDiv.vue'

const { posts, suggestions, isLoading, getDashboard } = usePosts()
onMounted(() => {
  getDashboard()
})

</script>

<template>
  <loading-bar v-if="isLoading" />
  <div class="container" style="padding-left: 14rem" v-else>
    <div class="row mb-4"></div>
    <div class="col-7-md mx-auto">
      <div class="row tw-flex">
        <div class="col-8 tw-flex tw-flex-col tw-items-center">
          <post-article v-for="post in posts" :post="post" :key="post.id" />
        </div>
        <div class="col-4" style="max-width: 320px; max-height: 300px; padding-left: 20px">
          Suggested for you
          <suggestion-div :suggestions="suggestions"></suggestion-div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.info {
  height: 18px;
}
article div span {
  font-size: 14px !important;
}
.avatar {
  width: 32rem;
  height: 32rem;
  border-radius: 100%;
}
</style>
