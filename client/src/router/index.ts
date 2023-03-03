import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsVue from '@/views/Products.vue'
import LoginVue from '@/views/Login.vue'
import { useSession } from '@/model/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/products', name: 'products', component: ProductsVue, beforeEnter: (secureRoute)},
    { path: '/login', name:'login', component: LoginVue },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

function secureRoute (to, from, next) {
  const session = useSession
  if (session.user)
  {
    next()
  }
  else {
    next('/login')
  }
}