<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import LoadingSpinner from '../LoadingSpinner.vue'

const props = defineProps(['postId'])

const caption = ref('')
const imgSrc = ref('')
const comments = ref([])
const liked = ref(false)
const user = ref({})
const isLoading = ref(false)
const likeCount = ref(0)
onMounted(async () => {
  try {
    isLoading.value = true
    const res = await axios.get(`api/post/${props.postId}`)
    caption.value = res.data.post.caption
    imgSrc.value = res.data.post.image
    comments.value = res.data.post.comments
    liked.value = res.data.post.liked
    user.value = res.data.post.user
    likeCount.value = res.data.likeCount
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div>
    <div class="modal" @click="$emit('closeModal')">
      <div class="modal-content card" @click.stop>
        <loading-spinner v-if="isLoading" />
        <div class="container" v-else>
          <div class="row">
            <div class="col-8" style="max-height: 705px">
              <div class="img-container tw-object-contain">
                <img :src="'http://localhost:8000/storage/' + imgSrc" alt="" />
              </div>
            </div>
            <div class="col-4 tw-border-l-2 tw-py-2">
              <div class="tw-flex tw-text-center tw-space-x-2 tw-border-b-2-">
                <img
                  :src="'http://localhost:8000/storage/' + user.profile?.image"
                  alt=""
                  class="tw-rounded-full tw-h-9 tw-w-9 tw-object-cover"
                />
                <span class="tw-text-base tw-font-bold">{{ user.username }}</span>
              </div>
              <div class="caption tw-flex">
                <span class="tw-text-base tw-font-bold tw-pr-2"> {{ user.username }}</span>
                <p> {{ caption }}</p>
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
      max-width: 700px;
      max-height: 700px;
    }
  }
}
</style>
