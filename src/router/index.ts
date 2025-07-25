import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/MeetManage/index.vue')
  },
  {
    path: '/meetInfo',
    component: () => import('@/views/MeetManage/meetInfo.vue')
  }
  // 后续扩展路由
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
