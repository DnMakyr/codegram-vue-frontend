<script setup>
defineProps(['messages', 'authId'])
</script>

<template>
  <div>
    <div v-if="messages.length === 0" class="tw-text-gray-500">No messages available.</div>
    <div v-else v-for="(message, index) in messages" :key="index">
      <div
        class="tw-p-3 tw-max-w-fit tw-rounded-lg tw-shadow-md tw-my-1"
        :class="
          message.sender == authId
            ? 'tw-bg-blue-500 tw-text-white tw-ml-auto'
            : 'tw-bg-white tw-text-black'
        "
      >
        {{ message.message }}
      </div>
    </div>
  </div>
</template>
