<template>
  <div class="custom-tag">
    <span class="custom-tag__span"></span>
    <span class="custom-tag__tag">{{ tag }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.custom-tag {
  display: flex;
  .custom-tag__span {
    width: 8px;
    background: #f59e0b;
    border-radius: 12px;
  }
  .custom-tag__tag {
    font-weight: 400;
    font-size: 30px;
    color: #ffffff;
    line-height: 46px;
    padding: 7px 30px 7px 12px;
    background: linear-gradient(270deg, #47abf2 0%, #2273e1 100%);
    border-radius: 0 12px 12px 0;
  }
}
</style>
