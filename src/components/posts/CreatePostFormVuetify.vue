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
</script>

<template>
  <v-overlay class="d-flex align-center justify-center" activator=".create">
    <v-card class="d-flex justify-center flex-col">
      <v-card-title class="text-center">Create Post</v-card-title>
      <v-container class="overflow-auto" style="padding-bottom: 10px ">
        <v-form @submit.prevent="newPost" class="d-flex flex-col space-y-3">
          <v-text-field v-model="data.caption" label="Caption" required hide-details>
          </v-text-field>
          <v-file-input
            @change="selectImage"
            label="Image"
            accept="image/*"
            prepend-icon=""
          ></v-file-input>
          <v-btn type="submit" color="primary">Submit</v-btn>
          <v-img
            class="self-center"
            :src="imageUrl"
            style="object-fit: contain; width: 22rem;"
          ></v-img>
        </v-form>
      </v-container>
    </v-card>
  </v-overlay>
</template>
