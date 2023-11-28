<template>
  <div class="indicator-dot" v-if="hasNewNotification">
    <div class="dot"></div>
  </div>
</template>

<script setup>
defineProps({
  hasNewNotification: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
.indicator-dot {
  position: relative;
  display: inline-block;
}

.dot {
  position: absolute;
  top: -14px;
  right: 12px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgb(238, 93, 93);
}
</style>
