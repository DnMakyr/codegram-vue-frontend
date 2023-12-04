<script setup>
import { ref } from 'vue'

const emit = defineEmits(['chooseComponent'])

const activeButton = ref('Profile') // Set the default active button

const setActiveButton = (button) => {
  activeButton.value = button
  emit('chooseComponent', button)
}
</script>

<template>
  <div>
    <nav class="tw-flex tw-justify-center">
      <button :class="{ active: activeButton === 'Profile' }" @click="setActiveButton('Profile')">
        Profile
      </button>
      <button :class="{ active: activeButton === 'Friends' }" @click="setActiveButton('Friends')">
        Friends
      </button>
    </nav>
    <div class="row p-2" style="border-bottom: 1px solid rgb(146, 144, 144)"></div>
  </div>
</template>

<style scoped>
nav button {
  font-size: 1rem;
  font-weight: 600;
  display: inline-block;
  padding: 0 8rem;
  border-left: 1px solid #ccc;
}
nav button:first-of-type {
  border-left: none;
}

.active {
  color: rgb(206, 80, 80);
  text-decoration: underline;
}
</style>
