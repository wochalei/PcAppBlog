<template>
  <div class="nav" :class="{ closed: isCollapse }">
    <user :class="{ man: isCollapse }"></user>
    <el-menu default-active="/" :collapse="isCollapse">
      <el-menu-item index="/" @click="toRouter">
        <el-icon><Promotion /></el-icon>
        <template #title>主页</template>
      </el-menu-item>
      <el-menu-item index="kinds" @click="toRouter">
        <el-icon><TakeawayBox /></el-icon>
        <template #title>分类</template>
      </el-menu-item>
      <el-menu-item index="myself" @click="toRouter">
        <el-icon><UserFilled /></el-icon>
        <template #title>个人</template>
      </el-menu-item>
    </el-menu>
    <div class="collapse" @click="changeCollapse">
      <el-icon v-if="isCollapse"><ArrowRightBold /></el-icon>
      <el-icon v-else><ArrowLeftBold /></el-icon>
    </div>
    <div style="height: 52px;"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import{ useRouter} from 'vue-router'
import {
  Promotion,
  TakeawayBox,
  UserFilled,
  ArrowRightBold,
  ArrowLeftBold,
} from "@element-plus/icons-vue";
import user from '@/components/user/index.vue'
const router = useRouter();
const props = defineProps({
  isCollapse: Boolean,
});
const emits = defineEmits(["isClosed"]);

const changeCollapse = () => {
  emits("isClosed", props.isCollapse);
};
const toRouter = (e)=>{
  router.push({path:e.index})
}
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: var(--bg-color);

  &:deep(.el-menu-item) {
    box-shadow: var(--card-hover-box-shadow);
    color: var(--font-color);
    transition: box-shadow 0.3s;
    margin: 3px 0;

    &.is-active {
      color: var(--el-menu-active-color);
    }
    &:hover {
      background-color: var(--hover);
    }
  }
}
.collapse {
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  font-size: 20px;
  width: var(--menu_width) !important;
  background-color: inherit;
  transition: all 0.3s;
  box-shadow: var(--card-hover-box-shadow);
  background-color: var(--bg-color);
  &:hover {
    background-color: var(--hover);
  }
}
.closed {
  .collapse {
    width: var(--menu_closed_width) !important;
  }

  &:deep(.el-menu-item) {
    .el-menu-tooltip__trigger {
      justify-content: center;
    }
  }
}
.man{
  opacity: 0;
  transition: all 0.3s;
}
</style>
  