<script setup>
defineProps({
  results: {
    type: Object
  }
})
</script>

<template>
  <div class="tw-text-center tw-overflow-y-auto col-2 !tw-h-96 tw-border-r-2">
    <h5>Users</h5>
    <div class="tw-flex tw-justify-center" v-for="(result, index) in results" :key="index">
      <!-- Fix: Change `results` to `result` in the loop -->
      <div class="tw-flex">
        <img
          class="tw-w-8 tw-h-8 tw-object-cover tw-rounded-full"
          :src="'http://localhost:8000/storage/' + result.profile?.image"
          alt=""
        />
        <span>{{ result.username }}</span>
      </div>
    </div>
  </div>
</template>
