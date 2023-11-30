<script setup>
import {useToast} from 'vue-toastification'
import { ref } from 'vue'
import axios from 'axios'
import ResultsDisplay from '../components/search/ResultsDisplay.vue'

const toast = useToast()

const query = ref('')
const results = ref([])

const search = async () => {
  if (query.value.length > 0) {
    try {
      const res = await axios.get(`/api/search`, {
        params: {
          query: query.value.trim()
        }
      })

      if (res.data && res.data.users) {
        results.value = res.data.users

      } else {
        toast(res.data.message)
      }
    } catch (err) {
      toast.error('Error fetching search results:', err)
    }
  } else {
    return
  }
}
</script>

<template>
  <div class="tw-pl-56 tw-pr-3 tw-py-1">
    <div class="card !tw-h-screen">
      <div class="tw-flex tw-self-center">
        <form class="tw-p-3 tw-flex tw-self-center" @submit.prevent="search">
          <input
            class="focus:tw-outline-blue-400 tw-p-1 tw-border-2 tw-border-slate-500 tw-rounded-md"
            size="70"
            type="text"
            v-model="query"
          />
        </form>
      </div>
      <results-display v-if="results.length > 0" :results="results" />
    </div>
  </div>
</template>
