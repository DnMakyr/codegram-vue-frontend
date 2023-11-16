<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth';
import FriendButton from './buttons/FriendButton.vue'
import FriendUserButton from './buttons/FriendUserButton.vue'
const props = defineProps(['recommendation'])
const authId = useAuthStore().userId
const button = computed(() => {
  if ( authId === props.recommendation.friendship?.requester_id || props.recommendation.friendship === null) {
    return FriendButton
  } else if (authId === props.recommendation.friendship?.user_requested_id) {
    return FriendUserButton
  }
  else {
    return null
  }
})
</script>

<template>
  <div class="col-md-3 mb-4">
    <div class="card">
      <div class="card-header">
        <img
          @click="$router.push('/profile/' + recommendation.id)"
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
        <span class="tw-grow tw-font-bold">{{ recommendation.name }}</span>

        <component :is="button" :recommendation="recommendation"></component>
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
