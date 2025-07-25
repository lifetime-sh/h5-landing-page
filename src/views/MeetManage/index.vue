<template>
  <div class="meet-manage">
    <div class="title">预览</div>
    <div class="img">
      <img :src="meetInfo.imgUrl" alt="" />
    </div>
    <div class="sub-title">{{ meetInfo.meetTitle }}</div>
    <div class="time">
      {{ meetInfo.meetTime }} <span>{{ meetInfo.meetSubTitle }}</span>
    </div>
    <div class="nav-list">
      <div
        class="list"
        v-for="(item, index) in meetNav"
        :key="index"
        :style="{
          background: `url(${item.img})no-repeat
          center center`
        }"
        @click="() => router.push(item.path)">
        <span :style="{ color: index === 1 || index === 2 || index === 5 ? '#fff' : '#1a63ff' }">{{ item.name }}</span>
      </div>
    </div>
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

interface MeetNavItem {
  name: string
  img: string
  path: string
}

const meetInfo = ref<MeetInfo>({
  imgUrl: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/logo.png',
  meetTitle: '第31次华中医师协会',
  meetSubTitle: '北京宣武医院',
  meetTime: '2025年7月10日 09:00:00'
})

const meetNav = ref<MeetNavItem[]>([
  {
    name: '会议信息',
    img: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/info.png',
    path: '/meetInfo'
  },
  {
    name: '专家风采',
    img: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/expert.png',
    path: '/expertShow'
  },
  {
    name: '会议通知',
    img: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/message.png',
    path: '/meetMessage'
  },
  {
    name: '大会日程',
    img: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/date.png',
    path: '/meetTime'
  },
  {
    name: '报名缴费',
    img: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/apply.png',
    path: '/meetApply'
  },
  {
    name: '会场交通',
    img: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/traffic.png',
    path: '/meetTraffic'
  }
])
</script>
<style lang="scss" scoped>
.meet-manage {
  width: 100%;
  height: 100%;
  .title {
    font-weight: 600;
    font-size: 32px;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
    text-align: center;
  }
  .img {
    margin: 58px 0 20px;
    image {
      width: 59px;
      height: 59px;
    }
  }
  .sub-title {
    font-weight: normal;
    font-size: 64px;
    line-height: 100px;
    text-align: center;
    font-style: normal;
    color: transparent;
    background: linear-gradient(90deg, #ffffff 0%, #afd9ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
  }
  .time {
    font-weight: 400;
    font-size: 26px;
    color: #ffffff;
    line-height: 40px;
    span {
      margin-left: 28px;
    }
  }
  .nav-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 76px;
    .list {
      width: 340px;
      height: 196px;
      font-weight: 500;
      font-size: 44px;
      color: #1a63ff;
      line-height: 66px;
      border-radius: 12px;
      box-sizing: border-box;
      padding-top: 32px;
      text-align: start;
      padding-left: 36px;
    }
  }
}
</style>
