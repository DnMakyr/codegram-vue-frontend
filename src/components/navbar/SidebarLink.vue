<script setup>
defineProps({
    href: {
      type: String,
      required: false
    }
})</script>

<template>
  <router-link :to="href" class="items">
    <slot />
  </router-link>
</template>

<style scoped>
.items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 23px;
  margin-top: 10px;
  width: 167px;
  height: 48px;
  padding: 12px;
  background-color: #f8fafc;
  text-align: center;
  font-size: 16px;
  text-decoration: none;
  color: black;
}

.items:hover {
  filter: brightness(92%);
  color: rgb(212, 65, 65) !important;
  border-style: initial;
  border-radius: 5px;
  transition: 0.3s;
  transform: scale(1.05);
}
</style>
