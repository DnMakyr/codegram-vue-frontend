<script setup>
import router from '../../router'
import CommentButton from '../buttons/CommentButton.vue'
import LikeButton from '../buttons/LikeButton.vue'
import DescriptionDiv from './DescriptionDiv.vue'
import CommentForm from './CommentForm.vue'
import { inject } from 'vue'

const post = inject('post')
defineProps({
  comments: {
    type: Array
  }
})
const emit = defineEmits(['commented'])

const isLiked = (val) => {
  post.likeCount += val
}
const commented = () => {
  emit('commented')
}
</script>

<template>
  <div class="interaction mt-3">
    <div class="row">
      <div class="col-6 tw-flex tw-space-x-2">
        <LikeButton :id="post.id" :liked="post.liked" @isLiked="isLiked" />
        <CommentButton />
      </div>
      <div class="col-6 tw-flex" style="flex-direction: row-reverse">
        <span><img src="/icons/ribbon.png" alt="" /></span>
      </div>
    </div>
    <div class="mt-2" style="font-size: 14px; font-weight: bold" v-if="post.likeCount > 0">
      <span>{{ post.likeCount }} {{ post.likeCount === 1 ? 'like' : 'likes' }}</span>
    </div>
    <description-div>
      <template v-slot:username>
        {{ post.user?.username }}
      </template>
      <template v-slot:caption>
        {{ post.caption }}
      </template>
    </description-div>
    <comment-form :id="post.id" @commented="commented" />
    <div v-show="comments.length > 0" v-if="comments">
      <div
        class="mt-1 tw-text-slate-400 tw-cursor-pointer tw-font-semibold"
        v-if="comments.length > 1"
        @click="router.push({ name: 'post', params: { id: post.id } })"
      >
        Show Comments
      </div>
      <div v-else>
        <span class="tw-font-bold tw-pr-2">{{ comments[0]?.user.username }}</span
        >{{ comments[0]?.content }}
      </div>
    </div>
  </div>
</template>
