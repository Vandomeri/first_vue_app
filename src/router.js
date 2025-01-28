import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: () => import('./pages/AboutPage.vue')
  },
  {
    path: '/products',
    component: () => import('./pages/ProductsPage.vue')
  },
  {
    path: '/products/:id',
    component: () => import('./pages/SingleProductPage.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('./pages/NotFound.vue')
  },
  {
    path: '/help',
    component: () => import('./pages/HelpPage.vue'),
    children: [
      {
        path: 'service',
        component: () => import('./pages/HelpServicePage.vue')
      },
      {
        path: 'feedback',
        component: () => import('./pages/HelpFeedbackPage.vue')
      },
      {
        path: 'guarantee',
        component: () => import('./pages/HelpGuaranteePage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
