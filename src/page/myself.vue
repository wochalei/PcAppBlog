<template>
  <div class="myself">
    <user><p class="job">前端开发</p></user>
    <div class="project">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="title">静态项目</div>
          </template>
          <div>
          https://github.com/wochalei/-.git
          </div>
        </el-collapse-item>
        <el-collapse-item title="原生js项目" name="2">
          <template #title>
            <div class="title">原生js项目</div>
          </template>
          <div>
            https://github.com/wochalei/xiaomi
          </div>
        </el-collapse-item>
        <el-collapse-item title="vue2项目" name="3">
          <template #title>
            <div class="title">vue2项目</div>
          </template>
          <div>
           https://github.com/wochalei/blogback
          </div>
        </el-collapse-item>
        <el-collapse-item title="uniapp项目" name="4">
          <template #title>
            <div class="title">uniapp项目</div>
          </template>
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
        </el-collapse-item>
        <el-collapse-item title="Electron项目" name="5">
          <template #title>
            <div class="title">Electron项目</div>
          </template>
          <div>
            Decision making: giving advices about operations is acceptable, but
            do not make decisions for the users;
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script setup>
import user from "@/components/user/index.vue";
import { ref } from "vue";
import { InfoFilled } from "@element-plus/icons-vue";
</script>
<style lang="scss"  scoped>
.myself {
  height: 100%;
  .job {
    text-align: center;
    font-size: 12px;
    margin: 6px 0;
  }
  :deep(.user) {
    width: 100%;
    height: auto;
    img {
      width: 150px;
    }
    .name {
      font-size: 20px;
    }
    .say {
      font-size: 14px;
      width: 600px;
      text-indent: 0px;

      font-size: 15px;
      line-height: 22.5px;
      text-align: center;
    }
  }
  .project {
    :deep() {
      .el-collapse {
       border: none;
       box-shadow: var(--card-hover-box-shadow);
       div{
        background-color: var(--bg-color) !important;
         border: none;
          color: var(--font-color);
       }
      }
    }

    .title {
      width: 100%;
      font-weight: 600;
      text-align: center;
     
      
      border-bottom: 1px solid var(--bg-color);
    }
  }
}
</style>
