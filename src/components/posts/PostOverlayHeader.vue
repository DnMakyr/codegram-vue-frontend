<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="tw-flex tw-text-center tw-space-x-2 tw-border-b-2">
    <img
      :src="'http://localhost:8000/storage/' + user.profile?.image"
      alt=""
      class="tw-rounded-full tw-h-9 tw-w-9 tw-object-cover"
    />
    <span class="tw-text-base tw-font-bold">{{ user.username }}</span>
  </div>
</template>

