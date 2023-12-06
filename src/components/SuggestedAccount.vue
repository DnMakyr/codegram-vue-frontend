<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
const props = defineProps({ suggestion: { type: Object, required: true } })

const status = ref(false)
const text = computed(() => {
  return status.value ? 'Following' : 'Follow'
})

const follow = async () => {
  await axios.post('/api/follow/' + props.suggestion.id)
  status.value = !status.value
}
</script>

<template>
  <div>
    <div class="tw-flex tw-justify-between tw-items-center p-2" style="flex-direction: row">
      <div class="tw-flex tw-items-center">
        <div>
          <img
            :src="'http://localhost:8000/storage/' + suggestion.profile.image"
            alt="avatar"
            class="avatar"
          />
        </div>
        <div class="tw-ml-2">{{ suggestion.username }}</div>
      </div>
      <button
        :class="status ? 'tw-text-gray-400' : 'tw-text-blue-500'"
        @click="follow()"
        v-text="text"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  object-fit: cover;
}
</style>
