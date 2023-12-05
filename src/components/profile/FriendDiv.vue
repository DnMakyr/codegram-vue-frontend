<script setup>
import router from '../../router'
defineProps(['friend'])
const redirect = (id) => {
  router.push({ name: 'profile', params: { id: id } })
}
</script>

<template>
  <div class="col-6 tw-py-4">
    <div
      class="tw-flex tw-items-center tw-space-x-2 tw-p-2 tw-border-2 tw-border-slate-500 tw-rounded"
    >
      <img
        class="tw-h-20 tw-w-20 tw-rounded tw-object-cover tw-cursor-pointer"
        :src="'http://localhost:8000/storage/' + friend.profile?.image"
        alt=""
        @click="router.push({ name: 'profile', params: { id: friend.id } })"
        @keydown.enter="redirect(friend.id)"
        tabindex="0"
      />
      <span
        class="tw-text-lg tw-font-semibold tw-cursor-pointer"
        @click="router.push({ name: 'profile', params: { id: friend.id } })"
        @keydown.enter="redirect(friend.id)"
        tabindex="0"
      >
        {{ friend.username }}</span
      >
    </div>
  </div>
</template>
