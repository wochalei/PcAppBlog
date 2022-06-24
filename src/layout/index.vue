<template>
  <el-container class="container" :class="{ closed: isCollapse }">
    <el-aside class="left" width="auto"><Nav @isClosed='(value)=>{isCollapse=!value}' :isCollapse="isCollapse" ></Nav></el-aside>
    <el-main class="main"><Content></Content></el-main>
  </el-container>
</template>

<script setup>
import Nav from "@/layout/components/nav/index.vue";
import Content from "@/layout/components/content/index.vue";
import { ref } from "vue";
const isCollapse = ref(false);

</script>

<style lang="scss" scoped>
.container{
  align-items: flex-start;
}
.left {
    width: var(--menu_width);
    height: 100vh;
    transition: all 0.3s;
    border-right: solid 1px var(--border);
    overflow:hidden;
    overflow-y: auto;
    :deep(.el-menu){
      border: none;
     
    }
}
.closed {
  .left {
    width: var(--menu_closed_width);
    :deep(.el-menu){
      .el-menu-item{
        font-size: 0;
      }
    }
  }
}
.main{
  height: 100vh;
  
  overflow: auto;
  overflow-x: hidden;
}
</style>