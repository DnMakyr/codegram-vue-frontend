<script setup>
import { onMounted, inject } from 'vue'
import useProfile from '../../composables/useProfile'

const id = inject('id')

const { friends, getFriends } = useProfile()

onMounted(() => {
  getFriends(id)
})
</script>

<template>
  <div>
    <div class="row">
      <div class="col-3">
        <div> {{ friends ? "You don't have any friends? Go make some in Explore!" : friends  }}</div>
      </div>
    </div>
  </div>
</template>
