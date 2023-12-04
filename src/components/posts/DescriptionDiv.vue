<script setup>
</script>

<template>
  <div class="mt-2">
    <div class="tw-inline">
      <span class="tw-font-bold tw-mr-2">
        <slot name="username"/>
      </span>
    </div>
    <span><slot name="caption"/></span>
  </div>
</template>
