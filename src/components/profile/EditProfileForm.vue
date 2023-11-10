<script setup>
import useProfile from '../../composables/useProfile'
import { ref } from 'vue'
import { useAuthStore as auth } from '../../stores/auth';
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
function selectImage(e) {
  formData.value.image = e.target.files[0]
  console.log(JSON.stringify(formData.value.image))
}
function updateData() {
  const data = new FormData()
  data.append('title', formData.value.title)
  data.append('description', formData.value.description)
  data.append('url', formData.value.url)
  data.append('image', formData.value.image)
  auth().setAvatar(JSON.stringify(formData.value.image))
  updateProfile(props.id, data)
}
</script>

<template>
  <form @submit.prevent="updateData">
    <div class="row mb-3">
      <label for="title" class="col-md-4 col-form-label text-md-end">Title</label>

      <div class="col-md-6">
        <input id="title" type="text" class="form-control" v-model="formData.title" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="description" class="col-md-4 col-form-label text-md-end">Description </label>

      <div class="col-md-6">
        <input id="description" type="text" class="form-control" v-model="formData.description" />
      </div>
    </div>

    <div class="row mb-3">
      <label for="url" class="col-md-4 col-form-label text-md-end">Link</label>

      <div class="col-md-6">
        <input id="url" type="text" class="form-control" v-model="formData.url" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="image" class="col-md-4 col-form-label text-md-end">Profile Image</label>
      <div class="col-md-6">
        <input
          type="file"
          accept="image/*"
          class="form-control-file"
          id="image"
          @change="selectImage"
        />
      </div>
    </div>
    <div class="tw-flex tw-justify-center">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>
