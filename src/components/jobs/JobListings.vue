<script setup>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    import axios from 'axios'
    import { onMounted, reactive, defineProps } from 'vue'
    import JobListing from '@/components/jobs/JobListing.vue'

    defineProps({
        limit: {
            type: Number
        }
    })

    const state = reactive({
        jobs: [],
        isLoading: true
    })

    onMounted(async () => {
        try {
            const response = await axios.get('http://localhost:8001/jobs')
            state.jobs = response.data
        } catch (error) {
            console.error('Error fetching error: ', error)
        } finally {
            state.isLoading = false
        }
    })
</script>

<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Job Listings -->
           <div v-if="state.isLoading" class="text-center">
            <PulseLoader />
           </div>

           <JobListing 
                v-for="job in state.jobs.slice(0, limit || state.jobs.length)" 
                :key="job.id" 
                :job="job"
            />
        </div>
      </div>
    </section>
</template>