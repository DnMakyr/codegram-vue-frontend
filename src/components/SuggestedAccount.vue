<script setup>
defineProps({ suggestion: { type: Object, required: true } })
</script>

<template>
  <div>
    <div class="flex justify-between items-center p-2" style="flex-direction: row">
      <div class="flex items-center">
        <div><img :src="'http://localhost:8000/storage/'+suggestion.profile.image" alt="avatar" class="avatar"></div>
        <div class="ml-2">{{suggestion.username}}</div>
      </div>
      <div>Follow</div>
    </div>
  </div>
</template>

<style scoped>
.avatar{
    width: 44px;
    height: 44px;
    border-radius: 100%;
}
</style>