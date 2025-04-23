// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

// Import your pages (components)
import LandingPage from '@/views/LandingPage.vue'
import Login from '@/views/LoginPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
