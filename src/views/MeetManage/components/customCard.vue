<template>
  <div class="custom-card">
    <slot name="content"></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.custom-card {
  padding: 36px 24px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(152deg, #c1ddfb 0%, #f6fcfe 100%);
  border-radius: 34px;
  border-image: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(205, 230, 255, 1)) 4 4;
}
</style>
