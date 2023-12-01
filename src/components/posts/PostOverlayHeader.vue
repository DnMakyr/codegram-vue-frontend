<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
})
</script>
<template>
  <div>
    <div class="tw-flex tw-pb-2">
      <div class="tw-flex tw-items-center tw-space-x-1 tw-flex-grow">
        <img
          :src="'http://localhost:8000/storage/' + user.profile?.image"
          alt=""
          class="tw-rounded-full tw-h-9 tw-w-9 tw-object-cover"
        />
        <span class="tw-text-base tw-font-bold">{{ user.username }}</span>
      </div>
      <button><img src="/icons/more.png" alt="" /></button>
    </div>
    <div class="tw-flex">
      <span class="caption tw-font-bold tw-pr-2"> {{ user.username }}</span>
      <p>{{ caption }}</p>
    </div>
  </div>
</template>
