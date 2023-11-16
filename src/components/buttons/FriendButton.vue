<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'

const props = defineProps(['recommendation'])

const reqStat = computed(() => {
  return props.recommendation.friendship && props.recommendation.friendship.status === 'pending'
})
const accepted = computed(() => {
  return props.recommendation.friendship && props.recommendation.friendship.status === 'friend'
})

// variable for responsive UI
const stat = ref(reqStat.value)
const friendStat = ref(accepted.value)

const buttonText = computed(() => {
  return stat.value ? 'Cancel Request' : 'Add Friend'
})

function action() {
  if (stat.value) {
    axios.post(`api/friend/${props.recommendation.id}/cancel`).then(() => {
      stat.value = false
    })
  } else {
    axios.post(`api/friend/${props.recommendation.id}`).then(() => {
      stat.value = true
    })
  }
}
function unfriend() {
  axios.post(`api/friend/${props.recommendation.id}/unfriend`).then(() => {
    stat.value = false
    friendStat.value = !friendStat.value
  })
}
</script>

<template>
  <div>
    <button
      v-if="!friendStat"
      class="btn btn-sm"
      :class="stat ? 'btn-outline-secondary' : 'btn-outline-primary'"
      v-text="buttonText"
      @click="action"
    ></button>
    <button
      class="btn btn-sm btn-outline-success"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-else
    >
      Friend
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" @click.prevent="unfriend">Unfriend</a></li>
    </ul>
  </div>
</template>
