<script setup>
import {ref} from 'vue'
import usePosts from '../composables/usePosts'
const {createPost} = usePosts()
const data = ref({
  caption: '',
  image: ''
})
function selectImage(e) {
  data.value.image = e.target.files[0]
}
function newPost(){
  const formData = new FormData()
  formData.append('caption', data.value.caption)
  formData.append('image', data.value.image)
  createPost(formData)
}
</script>

<template>
  <div class="container" style="padding-left: 13rem; z-index: 10;">
    <div class="row">
      <div class="col-6">
        <form @submit.prevent="newPost" enctype="multipart/form-data">
          <div class="flex">
            <label for="caption" class="pr-3" maxlength=""> Caption </label>
            <input type="text" class="form-control" v-model="data.caption" />
          </div>
          <div>
            <label for="image" class="pr-3">Image</label>
            <input type="file" accept="image/*" class="form-control-file" @change="selectImage" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
