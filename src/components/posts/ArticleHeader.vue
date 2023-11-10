<script setup>
import { inject } from 'vue'
import router from '../../router'
const post = inject('post')

function toProfile() {
  router.push(`/profile/${post.user.id}`)
}
</script>

<template>
  <div class="header tw-flex tw-items-center pb-3">
    <div class="tw-align-baseline tw-mr-1 avatar-img" @click="toProfile">
      <img
        :src="
          post.user.profile.image
            ? 'http://localhost:8000/storage/' + post.user.profile.image
            : '/temp/avatar.png'
        "
        alt="avatar"
        class="avatar"
      />
    </div>
    <div class="tw-flex tw-grow">
      <div>
        <div class="info tw-flex tw-items-center username" @click="toProfile">
          <span class="tw-ml-1" style="font-weight: bold">{{ post.user?.username }}</span>
          <!-- <span>•</span>
          <span>time</span> -->
        </div>
        <!-- <div style="font-size: 12px">location</div> -->
      </div>
    </div>
    <div class="tw-flex more"><img src="/icons/more.png" /></div>
  </div>
</template>

<style scoped>
.more:hover {
  cursor: pointer;
}
.info {
  height: 18px;
}
article div span {
  font-size: 14px !important;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border-style: groove;
}
.avatar-img:hover {
  cursor: pointer;
}
.username:hover {
  cursor: pointer;
}
</style>
