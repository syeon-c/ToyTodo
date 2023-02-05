// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/Hompage.vue'),
  },
  {
    path: '/todos',
    children: [
      {
        path: 'list',
        name: 'TodoListPage',
        component: () => import('@/views/TodoListPage.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
