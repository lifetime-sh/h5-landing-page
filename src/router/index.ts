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
  },
  {
    path: '/meetTime', // 大会日程
    component: () => import('@/views/MeetManage//meetTime.vue')
  },
  {
    path: '/meetApply', // 报名缴费
    component: () => import('@/views/MeetManage//meetApply.vue')
  },
  {
    path: '/meetTraffic', // 会场交通
    component: () => import('@/views/MeetManage//meetTraffic.vue')
  },
  {
    path: '/meetMessage', // 会场通知
    component: () => import('@/views/MeetManage//meetMessage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
