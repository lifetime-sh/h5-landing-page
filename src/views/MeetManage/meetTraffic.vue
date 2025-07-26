<template>
  <GoBackPage />
  <ContentTitle title="第31次华中医协会" subTitle="会场交通" />
  <CustomCard>
    <template #content>
      <div class="list" v-for="(item, index) in dataList" :key="index">
        <div class="title"><CustomTag :tag="item.title" /></div>
        <div class="list-item" v-for="(ele, i) in item.data" :key="i">
          <div class="list-item__top">
            <img :src="item.icon" />
            <span>{{ ele.title }}</span>
          </div>
          <div class="list-item__bottom">
            <span>{{ ele.value }}</span>
          </div>
        </div>
      </div>
    </template>
  </CustomCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomTag from './components/customTag.vue'
import GoBackPage from './components/goBackPage.vue'
import ContentTitle from './components/contentTitle.vue'
import CustomCard from './components/customCard.vue'

const dataList = ref([
  {
    title: '飞机场',
    icon: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/feiji.png',
    data: [
      {
        title: '首都机场',
        value: '路线说明：距离首都机场 36 公里，驾车 52 分钟'
      },
      {
        title: '',
        value: '距离大兴机场 47.4 公里，驾车45 分钟'
      }
    ]
  },
  {
    title: '火车站',
    icon: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/huoche.png',
    data: [
      {
        title: '北京站',
        value: '距离北京站 9.5公里，驾车28 分钟'
      },
      {
        title: '北京西站',
        value: '距离北京西站 5.6公里，驾车 16 分钟'
      },
      {
        title: '北京北站',
        value: '距离北京北站 6.7公里，驾车23 分钟'
      }
    ]
  },
  {
    title: '地铁站',
    icon: 'https://beijing-medical-1.obs.cn-north-4.myhuaweicloud.com/static/image/huoche.png',
    data: [
      {
        title: '达官营地铁站-C口(东南口）',
        value: '交通步行950米,约12分钟'
      },
      {
        title: '广安门内地铁站-A口（西北口）',
        value: '步行1公里,约13分钟'
      }
    ]
  }
])
</script>

<style scoped lang="scss">
.list {
  text-align: left;
  .title {
    margin-top: 44px;
  }
  .list-item {
    margin-top: 30px;
    .list-item__top {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      img {
        width: 22px;
        height: 24px;
        margin-right: 22px;
      }
      span {
        font-weight: 500;
        font-size: 30px;
        color: #1a2a40;
        line-height: 46px;
      }
    }
    .list-item__bottom {
      margin-left: 44px;
      font-weight: 400;
      font-size: 30px;
      color: #4b5563;
      line-height: 46px;
    }
  }
}
</style>
