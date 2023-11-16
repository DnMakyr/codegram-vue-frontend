<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps(['recommendation'])

const stat = ref(false)
const resState = ref()

function accept() {
  axios.post(`api/friend/${props.recommendation.id}/accept`)
  stat.value = true
  resState.value = true
}
function decline() {
  axios.post(`api/friend/${props.recommendation.id}/decline`)
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
