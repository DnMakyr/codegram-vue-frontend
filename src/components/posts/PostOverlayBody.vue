<script setup>
import LoadingBar from '../LoadingBar.vue';
defineProps({
  comments: {
    type: Object,
    required: true
  },
  loadingComments: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="tw-border-t-2 tw-overflow-auto" style="max-height: 32rem; min-height: 32rem">
    <loading-bar v-if="loadingComments" />
    <div class="tw-flex tw-items-center tw-py-1" v-for="(comment, index) in comments" :key="index" v-else>
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
</template>
