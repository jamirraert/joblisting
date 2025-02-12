<script setup>
  import axios from 'axios';
  import { reactive, onMounted } from 'vue'
  import Loading from '@/components/Loading.vue'
  import JobListings from '@/components/jobs/JobListings.vue'

  const state = reactive({
    jobs: [],
    isLoading: true
  })

  onMounted(async () => {
    try {
      const response = await axios.get('http://localhost:8001/jobs')
      state.jobs = response.data
    } catch (error) {
      console.error('Error fetching jobs: ', error)
    } finally {
      state.isLoading = false
    }
  })
</script>

<template>
  <div class="px-6 md:px-0 mx-auto container">
    <!-- Loading while fetching data -->
    <Loading v-if="state.isLoading" />

    <!-- Jobs data is ready -->
    <JobListings />
  </div>
</template>
