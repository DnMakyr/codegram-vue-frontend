<script setup>
import { onMounted } from 'vue'
import useNotifcations from '../../composables/useNotifications'

const { notifications, unreadCount, getNotifications } = useNotifcations()

const unreadNotiCount = unreadCount.value

defineProps({
  isShown: {
    type: Boolean
  }
})
const emit = defineEmits(['count'])
onMounted(() => {
  getNotifications()
  emit('getCount', unreadNotiCount)
})
</script>
<template>
  <transition>
    <div id="collapsible-div" class="tw-overflow-y-auto" v-if="isShown">
      <!-- Content goes here -->
      <p>{{ notifications }}</p>
    </div>
  </transition>
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
  transition: left 0.1s ease-in-out;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.327);
  text-wrap: stable;
  /* word-wrap: break-word; */
}
</style>
