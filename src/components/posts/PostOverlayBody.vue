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
  comments: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="body tw-pt-1">
    <div class="tw-flex">
      <span class="caption tw-text-base tw-font-bold tw-pr-2"> {{ user.username }}</span>
      <p>{{ caption }}</p>
    </div>
    <div class=" tw-border-t-2">
      <div
        class="tw-flex tw-items-center tw-py-1"
        v-for="(comment, index) in comments"
        :key="index"
      >
        <div class="tw-flex tw-items-center">
          <img
            class="tw-h-9 tw-w-9 tw-rounded-full tw-object-cover"
            :src="'http://localhost:8000/storage/' + comment.user?.profile?.image"
            alt=""
          />
          <span class="tw-flex tw-px-1 tw-font-bold">{{ comment.user?.username }}</span>
        </div>
        <span>{{ comment.content }}</span>
      </div>
    </div>
  </div>
</template>
