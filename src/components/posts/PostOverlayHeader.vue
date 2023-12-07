<script setup>
import usePosts from '../../composables/usePosts';

const {deletePost} = usePosts();

defineProps(['id', 'caption', 'user']);
</script>
<template>
  <div>
    <div class="tw-flex tw-pb-2">
      <div class="tw-flex tw-items-center tw-space-x-1 tw-flex-grow" >
        <img v-if="user.profile?.image"
          :src="'http://localhost:8000/storage/' + user.profile?.image"
          alt=""
          class="tw-rounded-full tw-h-9 tw-w-9 tw-object-cover"
        />
        <span class="tw-text-base tw-font-bold">{{ user.username }}</span>
      </div>
      <button data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/icons/more.png" alt="" />
      </button>
      <ul class="dropdown-menu tw-flex tw-flex-col tw-items-center tw-space-y-2" aria-labelledby="dropdownMenuButton">
        <li class="hover:tw-bg-slate-200 tw-p-1" @click="deletePost(id)">
          Delete Post
        </li>
        <li class="hover:tw-bg-slate-200 tw-p-1">
          Edit
        </li>
      </ul>
    </div>
    <div class="tw-flex">
      <span class="caption tw-font-bold tw-pr-2"> {{ user.username }}</span>
      <p>{{ caption }}</p>
    </div>
  </div>
</template>
