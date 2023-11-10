<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const status = ref(props.user.follows)
const buttonText = computed(() => {
  return status.value ? 'Following' : 'Follow'
})
async function toggleFollow() {
  await axios.post('/api/follow/' + props.user.id)
            .then(() => {
              status.value = !status.value
            })
}
</script>
<template>
  <button
    class="tw-mx-2 tw-px-3 tw-rounded-md tw-h-9"
    :class="status ? 'tw-bg-gray-400 tw-text-white' : 'tw-bg-blue-500 tw-text-white'"
    v-text="buttonText"
    @click="toggleFollow"
  ></button>
</template>
