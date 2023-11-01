<script setup>
import { inject } from 'vue'
// const post = inject('post')
</script>

<template>
  <div class="mt-2">
    <div class="inline">
      <span class="font-bold mr-2">
        <slot name="username"/>
      </span>
    </div>
    <span><slot name="caption"/></span>
  </div>
</template>
