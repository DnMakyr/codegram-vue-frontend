<script setup>
import { ref } from 'vue'
import usePosts from '../../composables/usePosts'

const { createPost } = usePosts()

const data = ref({
  caption: '',
  image: ''
})
const imageUrl = ref('')
function selectImage(e) {
  data.value.image = e.target.files[0]
  imageUrl.value = URL.createObjectURL(e.target.files[0])
}
function newPost() {
  const formData = new FormData()
  formData.append('caption', data.value.caption)
  formData.append('image', data.value.image)
  createPost(formData)
}
defineProps({
  isActive: Boolean
})
</script>

<template>
  <div class="tw-w-full tw-h-full tw-bg-slate-500" v-show="isActive">
    <div class="container tw-flex tw-justify-center tw-self-center">
      <div class="row contents tw-fixed tw-mt-3" style="z-index: 2;">
        <form class="tw-flex tw-flex-col tw-space-y-3" @submit.prevent="newPost">
          <label for="Caption">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your caption..."
              v-model="data.caption"
            />
          </label>
          <input type="file" accept="image/*" placeholder="Image" @change="selectImage" />
          <button type="submit" @click="!isActive" class="!tw-border-t-slate-950">Create</button>
          <img :src="imageUrl" alt="" style=" height: 25rem; object-fit: cover;"/>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contents {
  width: 30rem;
  background-color: white;
  border: 2px solid rgb(119, 136, 152);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  margin-top: 20px;
  transition: margin-top 1s ease-in-out;
}
.slide-up,
.slide-down {
  overflow: hidden;
}
</style>
