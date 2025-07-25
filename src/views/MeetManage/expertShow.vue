<template>
  <GoBackPage />
  <contentTitle title="第31次华中医协会" subTitle="专家风采" />
  <div class="expertShow" v-for="(item, index) in data" :key="index">
    <CustomCard>
      <template #content>
        <div class="expertShow__item">
          <div class="expertShow__left">
            <img :src="item.img" alt="" />
          </div>
          <div class="expertShow__right">
            <div class="expertShow__right__name">{{ item.name }}</div>
            <div class="expertShow__right__title">{{ item.title }}</div>
            <div class="expertShow__right__content">
              <div class="content-item" v-for="(ele, i) in item.content" :key="i">{{ ele }}</div>
            </div>
          </div>
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
  img: string
  name: string
  title: string
  content: string[] // 明确指定为字符串数组
}

// 定义接口返回的数据结构
interface ApiResponseItem {
  img: string
  name: string
  title: string
  content: string // 接口返回的是字符串
}

const data = ref<ExpertItem[]>([])
const fetchData = async () => {
  try {
    // 模拟接口返回的数据
    const apiData: ApiResponseItem[] = [
      {
        img: 'https://img2.baidu.com/it/u=3169725223,4108338961&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        name: '张三',
        title: '教授',
        content: '北京大学第一医院教育处处长,儿科主任医师、副主任、副教授中华,医学会儿科分会全科学组委员'
      },
      {
        img: 'https://img2.baidu.com/it/u=3169725223,4108338961&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
        name: '张三',
        title: '教授',
        content:
          '毕业于华西医科大学,现任中国医师协会副会长,兼任中国毕业后医学教育专家委员会常务副主任兼秘书长,国家毕教委执行委'
      }
    ]

    data.value = apiData.map((item) => ({
      ...item,
      content: item.content ? item.content.split(',') : [] // 处理空字符串情况
    }))
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
.expertShow {
  margin-bottom: 36px;
}

.expertShow__item {
  display: flex;
  .expertShow__right {
    flex: 1;
    text-align: start;
    &__name {
      font-weight: 500;
      font-size: 40px;
      color: #1a2a40;
      line-height: 60px;
    }
    &__title {
      font-weight: 400;
      font-size: 32px;
      color: #1a2a40;
      line-height: 48px;
      margin-top: 28px;
      margin-bottom: 8px;
    }
    &__content {
      font-weight: 400;
      font-size: 28px;
      color: #6b7280;
      line-height: 42px;
    }
  }
  .expertShow__left {
    width: 124px;
    height: 124px;
    position: relative;
    border-radius: 50%;
    // border: 6px solid;
    margin-right: 48px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(180deg, rgba(10, 191, 230, 0.14), rgba(69, 169, 241, 1));
      border-radius: 50%;
      z-index: -1;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
