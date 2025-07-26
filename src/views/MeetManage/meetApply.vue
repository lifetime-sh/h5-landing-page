<template>
  <GoBackPage />
  <contentTitle title="第31次华中医协会" subTitle="报名缴费" />
  <div class="meet-apply" v-for="(item, index) in info" :key="index">
    <CustomCard>
      <template #content>
        <div class="meet__item">
          <div class="meet__item__name">
            <div class="meet__item__left">{{ item.name }}</div>
            <div
              class="meet__item__right"
              :style="{
                color: item.status === '未签到' ? '#F59E0B' : ' #22C55E',
                background: item.status === '未签到' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(34, 197, 94, 0.1)'
              }">
              {{ item.status }}
            </div>
          </div>
          <div class="meet__item__sex">
            <div class="meet__item__left">
              性别：<span>{{ item.sex }}</span>
            </div>
            <div class="meet__item__right">
              所属科室：<span>{{ item.department }}</span>
            </div>
          </div>
          <div class="meet__item__sex">
            <div class="meet__item__left">
              最高学历：<span>{{ item.education }}</span>
            </div>
            <div class="meet__item__right">
              联系方式：<span>{{ item.phpne }}</span>
            </div>
          </div>
          <div class="meet__item__unit">
            <div class="meet__item__left">
              所属单位：<span>{{ item.unit }}</span>
            </div>
          </div>
          <template v-if="item.time">
            <div class="meet__item__time">签到时间：{{ item.time }}</div>
          </template>
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

// 定义接口返回的数据结构
interface ApiResponseItem {
  name: string
  status: string
  sex: string
  department: string
  education: string
  phpne: string
  unit: string
  time?: string
}
interface InfoItem {
  name: string
  status: string
  sex: string
  department: string
  education: string
  phpne: string
  unit: string
  time?: string
}

const info = ref<InfoItem[]>([])
const fetchData = async () => {
  try {
    // 模拟接口返回的数据
    const apiData: ApiResponseItem[] = [
      {
        name: '王建国',
        status: '未签到',
        sex: '女',
        department: '内科',
        education: '本科',
        phpne: '12345678901',
        unit: '所属单位'
      },
      {
        name: '王建国',
        status: '已签到',
        sex: '女',
        department: '内科',
        education: '本科',
        phpne: '12345678901',
        unit: '所属单位',
        time: '2022-01-01 10:00:00'
      }
    ]
    info.value = apiData || []
  } catch (error) {
    console.error('获取专家数据失败:', error)
  }
}
onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.meet-apply {
  margin-bottom: 16px;
  .meet__item__name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
    .meet__item__left {
      font-weight: 500;
      font-size: 30px;
      color: #1a2a40;
      line-height: 46px;
    }
    .meet__item__right {
      padding: 3px 14px;
      background: rgba(245, 158, 11, 0.1);
      border-radius: 24px;
      font-weight: 500;
      font-size: 24px;
      color: #f59e0b;
      line-height: 34px;
    }
  }
  .meet__item__sex {
    display: flex;
    text-align: left;
    margin-bottom: 16px;
    .meet__item__left {
      flex: 48%;
    }
    .meet__item__right {
      flex: 52%;
    }
    .meet__item__left,
    .meet__item__right {
      font-size: 30px;
      color: #6b7280;
      line-height: 46px;
      span {
        color: #4b5563;
      }
    }
  }
  .meet__item__unit,
  .meet__item__time {
    text-align: start;
    font-size: 30px;
    color: #6b7280;
    line-height: 46px;
    span {
      color: #4b5563;
    }
  }
  .meet__item__time {
    font-size: 24px;
    color: #c0c4cc;
    line-height: 36px;
    margin-top: 22px;
  }
}
</style>
