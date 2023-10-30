<script setup>
import { onMounted } from 'vue'
import useProfile from '../../composables/useProfile'
import EditProfileForm from '../../components/EditProfileForm.vue'
import LoadingSpinner from '/src/components/LoadingSpinner.Vue'

const { isLoading, profile, getProfile } = useProfile()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
onMounted(() => {
  getProfile(props.id)
})
</script>

<template>
  <loading-spinner style="padding-left: 10rem" v-if="isLoading" />
  <div class="row pt-5 justify-content-center" style="margin-left: 12rem" v-else>
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">Edit Profile</div>
        <div class="card-body">
          <EditProfileForm :id="id" :profile="profile" />
        </div>
      </div>
    </div>
  </div>
</template>
