<script setup>
import router from '../../router'

defineProps({
  statistics: {
    type: Object,
    required: true
  },
  user: {
    type: Object,
    required: true
  },
  authId: {
    type: Number,
    required: true
  },
  profile: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="row" style="max-height: 350px">
    <div class="col-3 p-5">
      <img
        :src="'http://localhost:8000/storage/' + profile.image"
        alt="avatar"
        class="avatar rounded-full"
      />
    </div>
    <div class="col-9 mt-5">
      <div class="d-flex justify-content-between align-items-baseline">
        <h2>{{ user.username }}</h2>
        <div class="d-flex">
          <button v-show="authId != user.id">Friend</button>
          <button v-show="authId != user.id">Follow</button>
          <button v-show="authId != user.id">Chat</button>
          <button class="btn btn-primary" @click="router.push(`/profile/${authId}/edit`)">
            Edit Profile
          </button>
        </div>
      </div>
      <div class="d-flex mt-2">
        <div class="mr-3">
          <strong
            ><span>{{ statistics?.postCount }}</span></strong
          >
          posts
        </div>
        <div class="mr-3">
          <strong
            ><span>{{ statistics?.followersCount }}</span></strong
          >
          followers
        </div>
        <div class="mr-3">
          <strong
            ><span>{{ statistics?.followingCount }}</span></strong
          >
          following
        </div>
      </div>
      <div class="mt-3 fw-bold">{{ user.profile?.title }}</div>
      <div>{{ user.profile?.description }}</div>
      <div>
        <a href="{{ user.profile?.url }}">{{ user.profile?.url }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  height: 150px;
  width: 150px;
  object-fit: cover;
}
</style>
