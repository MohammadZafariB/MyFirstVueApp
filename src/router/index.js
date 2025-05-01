import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Login from '@/views/LoginPage.vue'
import ShopCart from "@/views/ShopCart.vue"
import FavCart from "@/views/FavCart.vue"
import { useAuthStore } from '@/stores/authstore'

const routes = [
  { path: '/', component: LandingPage, name: "Home" },
  {
    path: '/login', component: Login, name: 'Login' 
  },
  { path: '/shop', component: ShopCart, name: 'Shop' , meta:{requiresAuth:true} },
  { path: '/favorite', component: FavCart, name: 'Favroite' , meta:{requiresAuth:true}}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to,from,next)=>{
  const authStore = useAuthStore()
  if(to.meta.requiresAuth && !authStore.isAuthenticated){
    next('/login')
  }
else{
  next()
}
})

export default router
