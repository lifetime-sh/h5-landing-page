<template>
  <GoBackPage />
  <ContentTitle title="第31次华中医协会" subTitle="会议通知" />
  <CustomCard>
    <template #content>
      <div class="meet-message">
        <div class="meet-message__header">
          2022年，中国医师协会发布了 《住院医师规范化培训内容与标准》、《住院医师规范化培训基础标准》
          等重要文件，文件进一步强调了要推行 “分层递进”培训模式。
          为了更好的理解和实施住院治疗流程，由首都医科大学宣武医院主办的北京市医师资格认证项目
          《北京市住院医师规范化培训分层递进培养模式师资研讨班》将于2024年1月6日在北京深圳大厦举行，培训班邀请具有丰富住培管理经验的专家授课。
        </div>
        <div class="meet-message__content">
          <CustomTag tag="培训对象" />
          <div class="content">各住培基地(含协同医院)教学主任、教学秘书、带教师资及住培管理人员。</div>
        </div>
        <div class="meet-message__content">
          <CustomTag tag="培训内容" />
          <div class="content">
            根据中国医师协会《住院医师规范化培训内容与标准（2022版）》，结合住培分层递进培养要求以及师资能力需求，着重解读我国住培的高质量发展与内涵建设，北京市住院医师规范化培训政策解读，住培“两个标准”要求解读，佳培分层递进培养理念介绍，住培分层递进培养模式实践探索，住培分层递进过程考核的设计与实施，内科、急诊科、全科等住院医师分层递进培训实践，分层递进理念下模拟课程的设计与实施，以及从基础生、带教师资和佳院医师三个角度介绍首都医科大学宣武医院住培分层递进培训实施体系。
          </div>
        </div>
        <div class="meet-message__content">
          <CustomTag tag="培训时间、地点和费用" />
          <div class="content">
            时间：2024年1月6日（周六） 至天，8:30开始上课。 地点：北京深圳大厦 详细地址：北京西城区广安门外大街1号。
            费用：收取资料费和午餐费等500元/人。
          </div>
        </div>
        <div class="meet-message__content">
          <CustomTag tag="会议注册" />
          <div class="img">
            <img src="" alt="" />
          </div>
          <div class="content">
            1. 扫描二维码报名，截止日期为2024年1月4日晚 24:00。 2. 银行转账、汇款途径缴费
            户名：美德美汇（北京）会议服务有限 公司账号：0200 0005 0920 0023 826。 3. 发票开具：
            增值税普通发票，会议结束后统一开具电子发 票至电子邮箱。
          </div>
        </div>
        <div class="meet-message__content">
          <CustomTag tag="会议注册" />
          <div class="content">李智博 18910738223 吴亚洲 15201061573</div>
        </div>
        <div class="meet-message__content">
          <CustomTag tag="师资培训证书" />
          <div class="content">全程听课签到并考核合格者颁发 “北京市住院医师规范化培训师资培训证书”。</div>
        </div>
      </div>
    </template>
  </CustomCard>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import GoBackPage from './components/goBackPage.vue'
import ContentTitle from './components/contentTitle.vue'
import CustomCard from './components/customCard.vue'
import CustomTag from './components/customTag.vue'
const info = ref({})
</script>
<style lang="scss" scoped>
.meet-message {
  text-align: left;
  font-weight: 400;
  font-size: 30px;
  color: #4b5563;
  line-height: 48px;
  .meet-message__content {
    .img {
      text-align: center;
      margin-top: 60px;
      margin-bottom: 26px;
      img {
        width: 204px;
        height: 204px;
        background: #ffffff;
        border-radius: 22px;
      }
    }

    .custom-tag {
      margin-top: 48px;
      margin-bottom: 26px;
    }
  }
}
</style>
