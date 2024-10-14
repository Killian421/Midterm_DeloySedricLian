import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProductPage from '../components/ProductPage.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/products', component: ProductPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
