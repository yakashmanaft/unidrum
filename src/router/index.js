import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue')
  },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/Dashboard.vue')
  // },
  // {
  //   path: '/account',
  //   name: 'account',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/Account.vue')
  // },
  // {
  //   path: '/view-bank/:bankId',
  //   name: 'view-bank',
  //   component: () => import('../views/ViewBank.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
