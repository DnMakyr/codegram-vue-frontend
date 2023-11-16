<script setup>
function toggleOverlay() {
  document.getElementById('overlay').style.display = 'block'
}
function toggleOff() {
  document.getElementById('overlay').style.display = 'none'
}
</script>

<template>
    <div>
    <button class="btn btn-primary btn-sm" @click="toggleOverlay">turn on overlay</button>
    <div id="overlay" @click="toggleOff"></div>
  </div>
</template>

<style>
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.416);
  z-index: 10;
  cursor: pointer;
}
</style>
