<script setup>
import { ref, computed } from 'vue'
import useFriend from '../../composables/useFriend'
const props = defineProps(['user'])
const { sendRequest, cancelRequest, unfriend } = useFriend()

const reqStat = computed(() => {
  return props.user.friendship && props.user.friendship.status === 'pending'
})
const accepted = computed(() => {
  return props.user.friendship && props.user.friendship.status === 'friend'
})

const stat = ref(reqStat.value)
const friendStat = ref(accepted.value)

const buttonText = computed(() => {
  return stat.value ? 'Cancel Request' : 'Add Friend'
})

function action() {
  if (stat.value) {
    cancelRequest(props.user.id)
    stat.value = false
  } else {
    sendRequest(props.user.id)
    stat.value = true
  }
}
const doUnfriend = () => {
  unfriend(props.user.id).then(() => {
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
      class="btn btn-sm btn-outline-success dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      v-else
    >
      Friend
    </button>
    <ul class="dropdown-menu">
      <li class="dropdown-item tw-cursor-pointer" @click.prevent="doUnfriend">Unfriend</li>
    </ul>
  </div>
</template>
