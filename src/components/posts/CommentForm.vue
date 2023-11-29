<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import usePosts from '../../composables/usePosts'

const commenter = useAuthStore().userId

const { postComment } = usePosts()

const props = defineProps(['id'])

const formData = ref({
  commenter: commenter,
  post: props.id,
  comment: ''
})
// const minRows = 1;
const maxRows = 5

const adjustTextarea = () => {
  const textarea = document.getElementById('commentTextarea')
  textarea.style.height = 'auto'
  textarea.style.height = `${Math.min(textarea.scrollHeight, maxRows * 20)}px`
}

const handleEnterKey = (event) => {
  if (event.shiftKey) {
    // If Shift key is pressed along with Enter, insert a newline character
    document.getElementById('commentTextarea').value += '\n'
    // Adjust the textarea height after inserting a newline character
    adjustTextarea()
  } else {
    // Otherwise, submit the form
    submitForm()
  }
}

const submitForm = () => {
  if (formData.value.comment.trim()) {
    postComment(formData.value)
    formData.value.comment = ''
    adjustTextarea()
  }
}
</script>

<template v-once>
  <div>
    <form @submit.prevent="submitForm">
      <textarea
        v-model="formData.comment"
        @input="adjustTextarea"
        @keydown.enter.prevent="handleEnterKey"
        aria-label="Add a comment..."
        placeholder="Add a comment..."
        rows="1"
        id="commentTextarea"
      ></textarea>
    </form>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
  width: 100%;
  min-height: 20px; /* Set a minimum height for the textarea */
  font-size: 14px;
  overflow-y: auto;
  display: flex;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

textarea:focus {
  outline: none;
}
</style>
