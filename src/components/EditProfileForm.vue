<script setup>
import useProfile from '../composables/useProfile'
import { ref } from 'vue'
const props = defineProps({
  profile: {
    type: Object,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
const formData = ref({
  title: props.profile.title,
  description: props.profile.description,
  url: props.profile.url,
  image: null
})

const { updateProfile } = useProfile()

// const submitForm = () => {
//   const fd = new FormData()
//   fd.append('title', formData.value.title)
//   fd.append('description', formData.value.description)
//   fd.append('url', formData.value.url)
//   fd.append('image', formData.value.image)
//   updateProfile(props.id, fd)
// }
</script>

<template>
  <form @submit.prevent="updateProfile(id, formData)" enctype="multipart/form-data">
    <div class="row mb-3">
      <label for="title" class="col-md-4 col-form-label text-md-end">Title</label>

      <div class="col-md-6">
        <input
          id="title"
          type="text"
          class="form-control"
          v-model="formData.title"
          autocomplete="title"
          autofocus
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="description" class="col-md-4 col-form-label text-md-end">Description </label>

      <div class="col-md-6">
        <input
          id="description"
          type="text"
          class="form-control"
          v-model="formData.description"
          autocomplete="description"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label for="url" class="col-md-4 col-form-label text-md-end">Link</label>

      <div class="col-md-6">
        <input
          id="url"
          type="text"
          class="form-control"
          v-model="formData.url"
          autocomplete="url"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="image" class="col-md-4 col-form-label text-md-end"> Profile Image</label>
      <div class="col-md-6">
        <input
          type="file"
          accept="image/*"
          class="form-control-file"
          id="image"
          @change="e => (formData.image = e.target.files[0])"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>
