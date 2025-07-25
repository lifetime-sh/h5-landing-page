<template>
  <div class="meet-manage">
    <button @click="router.push('./meetInfo')"></button>
    <div class="title">预览</div>
    <div class="img">
      <img :src="meetInfo.imgUrl" alt="" />
    </div>
    <div class="sub-title"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

interface MeetInfo {
  imgUrl: string
  meetTitle: string
  meetSubTitle: string
  meetTime: string
}

// interface MeetNavItem {
//   name: string
//   path: string
// }

const meetInfo = ref<MeetInfo>({
  imgUrl: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/logo.png',
  meetTitle: '第31次华中医师协会',
  meetSubTitle: '北京宣武医院',
  meetTime: '2025年7月10日 09:00:00'
})

const meetNav = ref([
  { name: '会议信息', path: '/meetManage/intro' },
  { name: '专家风采', path: '/meetManage/schedule' },
  { name: '会议通知', path: '/meetManage/attendees' },
  { name: '大会日程', path: '/meetManage/materials' },
  { name: '报名缴费', path: '/meetManage/feedback' },
  { name: '会场交通', path: '/meetManage/guide' }
])
</script>
<style lang="scss" scoped>
.meet-manage {
  width: 100%;
  height: 100vh;
  background: url('https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/meetingBG.png') no-repeat
    center center;
  background-size: cover;
}
</style>
