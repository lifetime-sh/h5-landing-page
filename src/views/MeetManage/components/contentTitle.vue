<template>
  <div class="content-title">
    <div class="content-title__title">{{ title }}</div>
    <div class="content-title__subtitle">{{ subTitle }}</div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  subTitle: {
    type: String,
    default: '副标题'
  }
})
</script>
<style lang="scss" scoped>
.content-title {
  margin-top: 16px;
  margin-bottom: 44px;
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
</style>
