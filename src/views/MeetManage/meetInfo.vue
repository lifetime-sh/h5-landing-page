<template>
  <GoBackPage />
  <contentTitle title="第31次华中医协会" subTitle="会议的基本信息" />
  <CustomCard>
    <template #content>
      <div class="info" v-for="(item, index) in data" :key="index">
        <div class="info-title">
          <div class="info-title__icon"></div>
          <div class="info-title__title">{{ item.title }}</div>
        </div>
        <div class="info-content">{{ item.content }}</div>
      </div>
    </template>
  </CustomCard>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import GoBackPage from './components/goBackPage.vue'
import contentTitle from './components/contentTitle.vue'
import CustomCard from './components/customCard.vue'

const info = ref({
  time: '2025年7月10日 09:00:00',
  address: '北京宣武医院东华金座二层示教室',
  name: '北京宣武医院',
  about:
    '这里是会议简介内容，这里是会议简介内容这里是会议简介内容这里是会议简介内容这里是会议简介内容，这里是会议简介内容这里是会议简介内容这里是会议简介内容',
  principal: '陈超',
  phone: '123456789'
})
const data = ref([
  {
    title: '会议时间',
    content: info.value.time
  },
  {
    title: '会议地址',
    content: info.value.address
  },
  {
    title: '会议名称',
    content: info.value.name
  },
  {
    title: '会议简介',
    content: info.value.about
  },
  {
    title: '会议负责人',
    content: info.value.principal
  },
  {
    title: '联系电话',
    content: info.value.phone
  }
])
</script>
<style lang="scss" scoped>
.info {
  display: flex;
  margin-bottom: 48px;
  .info-content {
    margin-left: 22px;
    text-align: start;
  }
}
.info-title {
  min-width: 176px;
  height: 44px;
  display: flex;
  align-items: center;
  background: linear-gradient(270deg, #47abf2 0%, #2273e1 100%);
  border-radius: 12px;

  .info-title__icon {
    display: block;
    width: 8px;
    height: 100%;
    background: #f59e0b;
    border-radius: 12px;
  }
  .info-title__title {
    padding: 7px 12px;
    padding-right: 6px;
    font-weight: 400;
    font-size: 30px;
    color: #ffffff;
    line-height: 46px;
  }
}
</style>
