<script setup>
import SuggestedAccount from './SuggestedAccount.vue'
defineProps({ suggestions: { type: Object, required  : false } })
</script>

<template>
  <div>
    <suggested-account v-for="suggestion in suggestions" :key="suggestion.id" :suggestion="suggestion"/>
  </div>
</template>
