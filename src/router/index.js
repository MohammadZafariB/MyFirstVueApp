// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

// Import your pages (components)
import LandingPage from '@/views/LandingPage.vue'
import Login from '@/views/LoginPage.vue'
import ShopCart from "@/views/ShopCart.vue"
import FavCart from "@/views/FavCart.vue"

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login },
  { path: '/shop', component: ShopCart },
  {path: '/favorite' , component :FavCart}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
