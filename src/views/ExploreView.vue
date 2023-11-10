<script setup>
import { onMounted } from 'vue'
import useFriend from '../composables/useFriend'
import LoadingSpinner from '../components/LoadingSpinner.vue'
const { isLoading, recommendations, getRecommendations } = useFriend()

onMounted(() => {
  getRecommendations()
})
</script>
<template>
  <loading-spinner v-if="isLoading" style="margin-left: 12rem" />
  <div class="container mt-5" style="padding-left: 16rem" v-else>
    <h2 class="tw-text-black">Explore</h2>
    <div class="row">
      <div class="col-md-3 mb-4" v-for="recommendation in recommendations" :key="recommendation.id">
        <div class="card">
          <div class="card-header">
            <img
              :src="
                recommendation.profile.image
                  ? 'http://localhost:8000/storage/' + recommendation.profile.image
                  : '/temp/avatar.png'
              "
              class="card-img-top"
              alt=""
            />
          </div>
          <div class="card-body tw-flex">
            <span class="tw-grow">{{ recommendation.name }}</span>

            <button class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-header {
  padding: 0 !important;
}
.card-img-top {
  height: 15.213rem;
  max-width: 15.213rem;
  object-fit: cover;
}
</style>
