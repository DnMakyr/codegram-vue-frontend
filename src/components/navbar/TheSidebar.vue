<script setup>
import { ref } from 'vue'
import SidebarLink from './SidebarLink.vue'
import { useAuth } from '../../composables/useAuth'
import useNotifications from '../../composables/useNotifications'
import { useAuthStore } from '../../stores/auth'
import CreatePostForm from '../posts/CreatePostForm.vue'
import NotificationSidebar from '../notification/NotificationSidebar.vue'
import IndicatorDot from '../notification/IndicatorDot.vue'
import router from '../../router'

const { newNotifications } = useNotifications()

const logout = useAuth().logout
const authId = useAuthStore().userId
const avatar = useAuthStore().avatar
const isActive = ref(false)

const isShown = ref(false)
function showNoti() {
  isShown.value = !isShown.value
  newNotifications.value = false
}
function closeForm() {
  isActive.value = false
}
</script>

<template>
  <div>
    <nav id="sidebarMenu" class="sidebar">
      <div class="tw-position-sticky tw-space-y-3">
        <div id="icon" class="tw-flex tw-cursor-pointer" @click="router.push('/dashboard')">
          <img
            src="/svg/codegram.svg"
            alt="logo"
            style="height: 45px; border-right: 1px solid #000000"
            class="pe-2"
          />

          <div class="ps-2 pt-1" style="font-size: 20px; font-weight: bold">Codegram</div>
        </div>

        <sidebar-link :href="'/dashboard'">
          <img src="/icons/home.png" alt="home" class="me-3" /><span>Home</span>
        </sidebar-link>
        <sidebar-link :href="'/explore'">
          <img src="/icons/direction.png" alt="explore" class="me-3" /><span>Explore</span>
        </sidebar-link>
        <sidebar-link :href="'search'">
          <img src="/icons/search.png" class="me-3" alt="" /><span>Search</span>
        </sidebar-link>
        <sidebar-link :href="'/chat'">
          <img src="/icons/message.png" class="me-3" alt="" /><span>Message</span>
        </sidebar-link>

        <button class="create" @click="isActive = !isActive">
          <img src="/icons/create.png" class="me-3" alt="" /><span>Create</span>
        </button>

        <button @click="showNoti">
          <img src="/icons/heart.png" class="me-3" alt="" /><indicator-dot :hasNewNotification="newNotifications"/> <span>Notification</span>
        </button>

        <sidebar-link :href="`/profile/${authId}`">
          <img
            :src="'http://localhost:8000' + avatar"
            alt=""
            class="tw-rounded-full me-3"
            style="width: 24px; height: 24px; object-fit: cover"
          /><span>Profile</span>
        </sidebar-link>
        <button class="logout" @click.prevent="logout">
          <img src="/icons/logout.png" alt="" class="me-3" /> <span>Logout</span>
        </button>
        <notification-sidebar v-if="isShown" />
      </div>
    </nav>
    <create-post-form :isActive="isActive" @closeForm="closeForm"/>
  </div>
</template>

<style scoped>
/* Sidebar */
.sidebar {
  border-right: solid 2px #dbdbdb;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 20px 0 0; /* Height of navbar */
  box-shadow:
    0 2px 5px 0 rgb(0 0 0 / 5%),
    0 2px 10px 0 rgb(0 0 0 / 5%);
  padding-right: 20px;
  width: moz-fit-content;
  z-index: 5;
  background-color: #f8fafc;
}

@media (max-width: 600px) {
  .sidebar {
    display: none !important;
  }
}
.sidebar .active {
  border-radius: 5px;
  box-shadow:
    0 2px 5px 0 rgb(0 0 0 / 16%),
    0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

#sidebarMenu {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

#icon {
  margin: 30px 0px 30px 16px;
}

.nav-auth#logout {
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
}
span.notification-count {
  margin-left: 7px;
  padding: 0px 2px;
  border-radius: 2px;
  background-color: #c73947d7;
  color: white;
  font-weight: bold;
}

/* Style for the new notification sidebar */
#notificationSidebar {
  position: fixed;
  top: 0;
  padding-left: 10px;
  padding-top: 57px;
  padding-right: 10px;
  left: 210px; /* Adjust the position to place it next to the main sidebar */
  width: 250px; /* Adjust the width as needed */
  height: 100%;
  background-color: #fff; /* Set the background color as desired */
  z-index: 998; /* Ensure it's above other content but behind the main sidebar */
  /* transition: left 0.3s ease-in-out; */
  transition: width 2s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.327); /* Add shadow if needed */
}
#notificationSidebar div.card:hover {
  transform: scale(1.05);
  transition: 0.5s;
  transform-origin: 100% 0;
}

/* Style for the button that opens the notification sidebar */
#openNotifications {
  cursor: pointer;
}

/* Adjust the position of the button as needed */
.router-link-active {
  font-weight: bold !important;
  color: rgb(212, 65, 65) !important;
  border-style: initial;
  border-radius: 5px;
}
button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 23px;
  width: 167px;
  height: 48px;
  padding: 12px;
  background-color: #f8fafc;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: black;
  border: none;
}

button:hover {
  filter: brightness(92%);
  color: rgb(212, 65, 65) !important;
  border-style: initial;
  border-radius: 5px;
  transition: 0.3s;
  transform: scale(1.05);
}
.logout {
  position: static;
  bottom: 15px;
}
</style>
