<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import useFriend from '../../composables/useFriend'
const props = defineProps(['user'])

const { rejectRequest, acceptRequest } = useFriend()

const stat = ref(false)
const resState = ref()

function accept() {
  acceptRequest(props.user.id)
  stat.value = true
  resState.value = true
}
function decline() {
  rejectRequest(props.user.id)
  stat.value = true
  resState.value = false
}
const text = computed(() => {
  return resState.value ? 'Accepted' : 'Declined'
})
</script>

<template>
  <div class="tw-space-x-2" v-if="!stat">
    <button class="btn btn-outline-success btn-sm" @click="accept" @keydown="accept">Accept</button>
    <button class="btn btn-outline-danger btn-sm" @click="decline" @keydown="decline">
      Decline
    </button>
  </div>
  <div v-else>
    <button
      :class="resState ? 'btn btn-outline-success btn-sm' : 'btn btn-outline-danger btn-sm'"
      v-text="text"
    ></button>
  </div>
</template>
