<script setup>
import { onMounted } from 'vue'
import router from '../../router'
import LoadingSpinner from '../LoadingSpinner.vue'
import PostOverlayHeader from './PostOverlayHeader.vue'
import PostOverlayBodyVue from './PostOverlayBody.vue'
import CommentForm from './CommentForm.vue'
import usePosts from '../../composables/usePosts'

const { user, imgSrc, caption, comments, likeCount, liked, isLoading, getSpecificPost } = usePosts()
const props = defineProps(['id'])

onMounted(() => {
  getSpecificPost(props.id)
})
</script>

<template>
  <div>
    <div class="modal" @click="$emit('closeModal')">
      <button
        type="button"
        class="btn-close tw-top-0 tw-right-0 tw-fixed"
        aria-label="Close"
        @click="router.go(-1)"
      ></button>
      <div class="modal-content card" @click.stop>
        <loading-spinner v-if="isLoading" />
        <div class="container" v-else>
          <div class="row">
            <div class="col-8" style="max-height: 705px">
              <div class="img-container tw-object-fit">
                <img :src="'http://localhost:8000/storage/' + imgSrc" alt="" />
              </div>
            </div>
            <div class="col-4 tw-border-l-2 tw-py-2">
              <post-overlay-header :user="user" />
              <post-overlay-body-vue
                :caption="caption"
                :comments="comments"
                :likeCount="likeCount"
                :liked="liked"
                :user="user"
              />
              <comment-form class="tw-absolute tw-bottom-0 tw-py-4 tw-border-t-2 tw-w-fit" :post="props.post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  width: 80%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 43.75rem;
      height: 43.75rem;
    }
  }
}
</style>
