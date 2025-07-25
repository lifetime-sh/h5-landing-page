<template>
  <div class="go-back">
    <div class="go-back__icon" @click="goBack">
      <svg
        t="1753432431002"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1069"
        width="42"
        height="42">
        <path
          d="M663.466667 211.2L364.8 512l300.8 300.8c14.933333 14.933333 17.066667 38.4 4.266667 53.333333-2.133333 2.133333-2.133333 4.266667-4.266667 6.4-14.933333 14.933333-38.4 17.066667-53.333333 4.266667-2.133333-2.133333-4.266667-2.133333-6.4-4.266667L273.066667 541.866667c-17.066667-17.066667-17.066667-42.666667 0-59.733334L603.733333 151.466667c8.533333-8.533333 19.2-12.8 29.866667-12.8 10.666667 0 21.333333 4.266667 29.866667 12.8 8.533333 8.533333 12.8 19.2 12.8 29.866666 0 10.666667-4.266667 21.333333-12.8 29.866667z"
          p-id="1070"
          fill="#ffffff"></path>
      </svg>
    </div>
    <div class="middle">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="right">
      <slot name="right">{{ right }}</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  right: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['click'])
const router = useRouter()

const goBack = (event: any) => {
  // 触发自定义点击事件
  emit('click', event)
  // 默认行为：返回上一页
  router.back()
}
</script>
<style scoped lang="scss">
.go-back {
  display: flex;
  align-items: center;
  height: 88px;
  justify-content: space-between;
  .go-back__icon {
    margin-left: 4px;
  }
  .middle,
  .right {
    font-weight: 600;
    font-size: 32px;
    color: #ffffff;
    line-height: 48px;
  }
}
</style>
