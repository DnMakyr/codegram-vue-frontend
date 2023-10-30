<script setup>
import { onMounted } from 'vue'
import usePosts from '../composables/usePosts'
import LoadingSpinner from '../components/LoadingSpinner.vue'
const { posts, isLoading, getDashboard } = usePosts()

onMounted(() => {
  getDashboard()
})
</script>

<template>
  <loading-spinner v-if="isLoading" style="margin-left: 12rem" />
  <div class="container" style="padding-left: 12rem" v-else>
    <div class="row mb-4"></div>
    <div class="col-7-md mx-auto">
      <div class="row flex">
        <div class="col-8 flex flex-col items-center">
          <article class="flex flex-col" style="width: 29.375rem; height: 34px">
            <div class="header flex items-center mb-2">
              <div class="align-baseline">
                <img src="public\favicon.ico" alt="avatar" />
              </div>
              <div class="flex">
                <div style="width: 25.8rem">
                  <div class="info flex items-center">
                    <span style="font-weight: bold">username</span>
                    <span>•</span>
                    <span>time</span>
                  </div>
                  <div style="font-size: 12px">location</div>
                </div>
              </div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
              <div class="flex" style="flex;"><img src="/icons/dots.png" alt="" /></div>
            </div>
            <div class="body">
              <img src="/img/download (12).jpg" alt="image" />
            </div>
            <div class="interaction">
              <div class="row">
                <div class="col-6 flex space-x-2">
                  <span class="like">
                    <div>
                      <span style="width: 24px; height: 24px">Like</span>
                    </div>
                  </span>
                  <span class="comment">
                    <div>
                      <span style="width: 24px; height: 24px">Comment</span>
                    </div>
                  </span>
                </div>
                <div class="col-6 flex" style="flex-direction: row-reverse;">
                 <span>Bookmark</span>
                </div>
              </div>
              <div>Comment Form</div>
              <div>Show Comments</div>
            </div>
          </article>
        </div>
        <div class="col-4 bg-blue-400">suggestion</div>
      </div>
    </div>
  </div>
</template>
<style>
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
