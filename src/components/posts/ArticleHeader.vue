<script setup>
import { inject } from 'vue'

const post = inject('post') 
</script>

<template>
  <div class="header flex items-center pb-3">
    <div class="align-baseline">
      <img :src="'http://localhost:8000/storage/'+post.user.profile?.image" alt="avatar" class="avatar" />
    </div>
    <div class="flex">
      <div style="width: 25.8rem">
        <div class="info flex items-center">
          <span class="ml-1" style="font-weight: bold">{{post.user?.username}}</span>
          <!-- <span>•</span>
          <span>time</span> -->
        </div>
        <!-- <div style="font-size: 12px">location</div> -->
      </div>
    </div>
    <div class="flex more"><img src="/icons/more.png" /></div>
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
</style>
