<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
const props = defineProps(['recommendation'])
const reqStat = computed(() => {
  return props.recommendation.friendship?.status === 'pending' ? true : false
})
const stat= ref(reqStat.value)
const buttonText = computed(() => {
  return (stat.value) ? 'Cancel Request' : 'Add Friend'
})
function action(){
  if (stat.value) {
    axios.post(`api/friend/${props.recommendation.id}/cancel`)
  }
  else {
    axios.post(`api/friend/${props.recommendation.id}`)
  }
  stat.value = !stat.value
}
</script>

<template>
  <div>
    <button class="btn btn-sm" :class=" stat ? 'btn-outline-secondary':'btn-outline-primary'" v-text="buttonText" @click="action"></button>
  </div>
</template>
