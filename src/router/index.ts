import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home', // 首页
    component: () => import('@/views/MeetManage/index.vue')
  },
  {
    path: '/meetInfo', // 会议信息
    component: () => import('@/views/MeetManage/meetInfo.vue')
  },
  {
    path: '/expertShow', // 专家风采
    component: () => import('@/views/MeetManage/expertShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
