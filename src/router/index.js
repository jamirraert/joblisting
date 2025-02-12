import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '@/views/JobsView.vue'
import Job from '@/views/JobView.vue'
import AddJob from '@/views/AddJobView.vue'
import EditJob from '@/views/EditJobView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/job/:id',
      name: 'job',
      component: Job
    },
    {
      path: '/add-job',
      name: 'add-job',
      component: AddJob
    },
    {
      path: '/edit-job/:id',
      name: 'edit-job',
      component: EditJob
    }
  ],
})

export default router
