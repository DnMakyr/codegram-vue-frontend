<script setup>
import ChatWindow from '../components/chat/ChatWindow.vue';
import ChatList from '../components/chat/ChatList.vue';
import LandingWindow from '../components/chat/LandingWindow.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-3" style="margin-right: 5px;"><chat-list/></div>
      <div class="col-8"><landing-window/></div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding-left: 14rem;
  padding-top: 3rem;
}
</style>