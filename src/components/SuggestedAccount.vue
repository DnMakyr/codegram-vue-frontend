<script setup>
defineProps({ suggestion: { type: Object, required: true } })
</script>

<template>
  <div>
    <div class="tw-flex tw-justify-between tw-items-center p-2" style="flex-direction: row">
      <div class="tw-flex tw-items-center">
        <div><img :src="'http://localhost:8000/storage/'+suggestion.profile.image" alt="avatar" class="avatar"></div>
        <div class="tw-ml-2">{{suggestion.username}}</div>
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