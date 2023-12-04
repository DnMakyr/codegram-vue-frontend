<script setup>
import { onMounted } from 'vue'
import useNotifcations from '../../composables/useNotifications'
import NotificationRow from './NotificationRow.vue'
import LoadingBar from '../LoadingBar.vue'

const { isLoading, notifications, getNotifications } = useNotifcations()

defineProps({
  isShown: {
    type: Boolean
  }
})
onMounted(() => {
  getNotifications()
})
</script>
<template>
    <div id="collapsible-div" class="tw-overflow-y-auto">
      <loading-bar v-if="isLoading" />
      <notification-row :notifications="notifications" v-cloak />
    </div>
</template>

<style>
#collapsible-div {
  margin-top: 0 !important;
  position: absolute;
  top: 0;
  left: 210px;
  width: 300px;
  height: 100%;
  background-color: #fff;
  z-index: 9;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.327);
  text-wrap: stable;
  /* word-wrap: break-word; */
}
</style>
