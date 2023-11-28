<script setup>
import router from '../../router'
import CommentButton from '../buttons/CommentButton.vue'
import LikeButton from '../buttons/LikeButton.vue'
import DescriptionDiv from './DescriptionDiv.vue'
import CommentForm from './CommentForm.vue'
import { inject } from 'vue'

const post = inject('post')
</script>

<template>
  <div class="interaction mt-3">
    <div class="row">
      <div class="col-6 tw-flex tw-space-x-2">
        <LikeButton />
        <CommentButton />
      </div>
      <div class="col-6 tw-flex" style="flex-direction: row-reverse">
        <span><img src="/icons/ribbon.png" alt="" /></span>
      </div>
    </div>
    <div class="mt-2" style="font-size: 14px; font-weight: bold" v-show="post.likeCount > 0">
      <span>{{ post.likeCount }}</span> {{ post.likeCount === 1 ? 'like' : 'likes' }}
    </div>
    <description-div>
      <template v-slot:username>
        {{ post.user?.username }}
      </template>
      <template v-slot:caption>
        {{ post.caption }}
      </template>
    </description-div>
    <comment-form :id="post.id" />
    <div
      class="mt-1"
      v-if="post.comments.length > 1"
      @click="router.push({ name: 'post', params: { id: post.id } })"
    >
      Show Comments
    </div>
    <div v-else>
      <span class="tw-font-bold tw-pr-2">{{ post.comments[0]?.commenter }}</span
      >{{ post.comments[0]?.content }}
    </div>
  </div>
</template>
