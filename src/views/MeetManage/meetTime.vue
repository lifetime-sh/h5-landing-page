<template>
  <GoBackPage />
  <contentTitle title="第31次华中医协会" subTitle="大会日程" />
  <div class="meetTime" v-for="(item, index) in data" :key="index">
    <CustomCard>
      <template #content>
        <div class="meet__item">
          <div class="title">{{ item.name }}</div>
          <div class="time">{{ item.address }} {{ item.time }}</div>
        </div>
      </template>
    </CustomCard>
  </div>
</template>

<script setup lang="ts">
import GoBackPage from './components/goBackPage.vue'
import contentTitle from './components/contentTitle.vue'
import CustomCard from './components/customCard.vue'
import { ref, onMounted } from 'vue'

interface ExpertItem {
  name: string
  address: string
  time: string
}

// 定义接口返回的数据结构
interface ApiResponseItem {
  name: string
  address: string
  time: string // 接口返回的是字符串
}

const data = ref<ExpertItem[]>([])
const fetchData = async () => {
  try {
    // 模拟接口返回的数据
    const apiData: ApiResponseItem[] = [
      {
        name: '开幕式',
        address: '深圳大厦',
        time: '2024-01-06 08:30-09:00'
      },
      {
        name: '主题报告',
        address: '深圳大厦',
        time: '2024-01-06 09:00-12:00'
      },
      {
        name: '茶歇',
        address: '深圳大厦',
        time: '2024-01-06 12:00-12:30'
      },
      {
        name: '主题报告',
        address: '深圳大厦',
        time: '2024-01-06 12:30-15:00'
      }
    ]

    data.value = apiData || []
  } catch (error) {
    console.error('获取专家数据失败:', error)
    data.value = []
  }
}
onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.meetTime {
  text-align: start;
  margin-bottom: 22px;
  .custom-card {
    padding: 36px 38px;
  }
  .title {
    font-weight: 500;
    font-size: 30px;
    color: #1a2a40;
    line-height: 46px;
    margin-bottom: 22px;
  }
  .time {
    font-weight: 400;
    font-size: 30px;
    color: #4b5563;
    line-height: 46px;
  }
}
</style>
