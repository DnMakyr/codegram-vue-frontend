<script setup>
import { onMounted } from 'vue'
import router from '../../router'
import LoadingSpinner from '../LoadingSpinner.vue'
import PostOverlayHeader from './PostOverlayHeader.vue'
import PostOverlayBody from './PostOverlayBody.vue'
import CommentForm from './CommentForm.vue'
import usePosts from '../../composables/usePosts'
import LikeButton from '../buttons/LikeButton.vue'

const { user, imgSrc, caption, comments, likeCount, liked, isLoading, getSpecificPost } = usePosts()
const props = defineProps(['id'])

onMounted(() => {
  getSpecificPost(props.id)
})
function updateComments() {
  getSpecificPost(props.id)
}
function isLiked(val) {
  likeCount.value += val
}
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
            <div class="col-7 tw-flex tw-justify-center" style="max-height: 705px">
              <div class="img-container">
                <img :src="'http://localhost:8000/storage/' + imgSrc" alt="" />
              </div>
            </div>
            <div class="col-5 tw-border-l-2">
              <div class="tw-py-2">
                <post-overlay-header :user="user" :caption="caption" :id="props.id" />
                <post-overlay-body
                  :user="user"
                  :comments="comments"
                  :likeCount="likeCount"
                  :liked="liked"
                />
                <div class="tw-pt-2 tw-border-t-2">
                  <like-button :id="props.id" :liked="liked" @isLiked="isLiked" />
                  <div v-if="likeCount > 0">{{ likeCount }} {{ likeCount > 1 ? "likes" : "like" }}</div>
                </div>
              </div>
              <div class="tw-w-full mt-auto">
                <comment-form @commented="updateComments" class="tw-py-2" :id="props.id" />
              </div>
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
      width: 42rem;
      height: 42rem;
      object-fit: contain;
    }
  }
}
</style>
