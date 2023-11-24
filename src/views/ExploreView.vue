<script setup>
import { onMounted } from 'vue'
import useFriend from '../composables/useFriend'
import LoadingBar from '../components/LoadingBar.vue';
import UserFrame from '../components/UserFrame.vue';
const { isLoading, recommendations, getRecommendations } = useFriend()

onMounted(() => {
  getRecommendations()
})
</script>
<template>
  <loading-bar v-if="isLoading" />
  <div class="container mt-5" style="padding-left: 16rem" v-else>
    <h2 class="tw-text-black">Explore</h2>
    <div class="row !tw-mt-7">
      <user-frame v-for="recommendation in recommendations" :key="recommendation.id" :recommendation="recommendation"/>
    </div>
  </div>
</template>
