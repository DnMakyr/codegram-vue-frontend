<script setup>
import CommentButton from '../buttons/CommentButton.vue'
import LikeButton from '../buttons/LikeButton.vue'
import DescriptionDiv from './DescriptionDiv.vue'
import CommentForm from './CommentForm.vue'
import { inject } from 'vue'

const post = inject('post')
const likeCount = inject('likeCount')
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
    <div class="mt-2" style="font-size: 14px; font-weight: bold" v-show="likeCount[post.id] > 0">
      <span>{{ likeCount[post.id] }}</span> {{ likeCount[post.id] === 1 ? 'like' : 'likes' }}
    </div>
    <description-div>
      <template v-slot:username>
        {{ post.user?.username }}
      </template>
      <template v-slot:caption>
        {{ post.caption }}
      </template>
    </description-div>
    <comment-form :post="post"/>
    <div class="mt-1">Show Comments</div>
  </div>
</template>
