// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

// Import your pages (components)
import Home from '@/components/LandingPage.vue'
import Login from '@/components/LoginPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
