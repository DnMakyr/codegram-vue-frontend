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
  await axios.post('/api/follow/' + props.user.id).then(() => {
    status.value = !status.value
  })
}
</script>
<template>
  <div>
    <button
      class="btn btn-sm"
      :class="status ? 'btn-outline-secondary' : 'btn btn-outline-primary'"
      v-text="buttonText"
      @click="toggleFollow"
    ></button>
  </div>
</template>
