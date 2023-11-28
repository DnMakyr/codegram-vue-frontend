<script setup>
defineProps({
  notifications: {
    type: Array
  }
})
</script>

<template>
  <div>
    <div
      id="notification-row"
      class="tw-flex tw-items-center tw-p-4 tw-justify-center"
      v-for="(notification, index) in notifications"
      :key="index"
    >
      <span v-if="notification.data.type === 'like'"
        >{{ notification.data.username }} liked your post: {{ notification.data.post_caption }}
      </span>
      <span
        v-else-if="notification.data.type === 'friend' && notification.data.action === 'request'"
      >
        {{ notification.data.username }} want to be your friend</span
      >
      <span
        v-else-if="notification.data.type === 'friend' && notification.data.action === 'accept'"
      >
        {{ notification.data.username }} accepted your request</span
      >
      <span v-else> {{ notification.data.username }} commented on your post: {{ notification.data.post_caption }}</span>
    </div>
  </div>
</template>

<style scoped>
#notification-row {
  border-bottom: 1px solid rgba(199, 201, 201, 0.825);
}
</style>
