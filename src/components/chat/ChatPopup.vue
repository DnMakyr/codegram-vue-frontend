<script setup>
defineProps(['showModal'])
</script>

<template>
  <div>
    <div v-if="showModal" class="modal" @click="$emit('closeModal')">
      <div class="modal-content" @click.stop>
        <!-- Add your modal content here -->
        <h2>Send Message</h2>
        <p>Modal content goes here...</p>
        <div class="button-container tw-space-x-11">
          <button class="btn btn-outline-primary">Send</button>
          <button class="btn btn-outline-secondary" @click="$emit('closeModal')">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .button-container {
    position: absolute;
    bottom: 15px;
    width: 100%;
    text-align: center;
  }
}
</style>
