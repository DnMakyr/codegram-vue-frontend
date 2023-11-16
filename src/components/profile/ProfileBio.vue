<script setup>
import router from '../../router'
import FollowButton from './FollowButton.vue'
import FriendButton from '../buttons/FriendButton.vue'

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
  }
})
</script>

<template>
  <div class="row" style="max-height: 350px">
    <div class="col-3 p-5">
      <img
        :src="'http://localhost:8000/storage/' + user.profile?.image"
        alt="avatar"
        class="avatar tw-rounded-full"
      />
    </div>
    <div class="col-9 mt-5">
      <div class="tw-flex tw-justify-between tw-align-items-baseline">
        <h2>{{ user.username }}</h2>
        <div class="tw-flex tw-items-center">
          <friend-button v-show="authId !== user.id" :user="user" />
          <follow-button v-show="authId !== user.id" :user="user" />
          <div>
            <button
              class="btn btn-primary btn-sm"
              v-show="authId === user.id"
              @click="router.push(`/profile/${authId}/edit`)"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div class="tw-flex mt-2">
        <div class="tw-mr-3">
          <strong
            ><span>{{ statistics?.postCount }}</span></strong
          >
          posts
        </div>
        <div class="tw-mr-3">
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
      <div class="mt-3 tw-fw-bold">{{ user.profile?.title }}</div>
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
