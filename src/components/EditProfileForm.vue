<script setup>
defineProps({
  profile: {
    type: Object,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
</script>

<template>
  <form action="" @submit.prevent="">
    <div class="row mb-3">
      <label for="title" class="col-md-4 col-form-label text-md-end">Title</label>

      <div class="col-md-6">
        <input
          id="title"
          type="text"
          class="form-control"
          name="title"
          :value=" profile?.title "
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
          name="description"
          :value=" profile?.description "
          autocomplete="description"
        />
      </div>
    </div>

    <div class="row mb-3">
      <label for="url" class="col-md-4 col-form-label text-md-end">Link</label>

      <div class="col-md-6">
        <input id="url" type="text" class="form-control" name="url" :value=" profile?.url " autocomplete="url" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="image" class="col-md-4 col-form-label text-md-end"> Profile Image</label>
      <div class="col-md-6">
        <input
          type="file"
          class="form-control-file"
          id="image"
          name="image"
          data-bs-toggle="modal"
          data-bs-target="#cropModal"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>
