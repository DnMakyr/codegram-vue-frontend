<script setup>
defineProps({
  results: {
    type: Object
  }
})
</script>

<template>
  <div class="tw-text-center tw-overflow-auto col-10">
    <h5>Posts</h5>
    <div class="tw-flex tw-justify-center">
      <div
        v-for="(result, index) in results"
        :key="index"
        class="tw-flex tw-flex-col tw-items-center tw-mx-4"
      >
        <!-- Additional flex container for posts -->
        <div class="row">
          <div v-for="(post, postIndex) in result.posts" :key="postIndex" class="col-md-4 p-2">
            <div class="card tw-h-100 tw-w-100">
              <div class="card-header tw-flex tw-items-center">
                <img
                  class="tw-w-8 tw-h-8 tw-object-cover tw-rounded-full"
                  :src="
                    'http://localhost:8000/storage/' + (result.profile ? result.profile.image : '')
                  "
                  alt=""
                />
                <span class="tw-px-2">{{ result.username }}</span>
              </div>
              <div class="card-body">
                <img
                  class="tw-w-full tw-h-64 tw-object-cover"
                  :src="'http://localhost:8000/storage/' + post.image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
