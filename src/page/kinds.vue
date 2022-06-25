<template>
  <div class="kinds">
    <el-tree
      :data="treeData"
      :props="defaultProps"
      @node-click="handleNodeClick"
      accordion
      v-loading="treeData.length === 0"
      class="tree"
    />
  </div>
</template>
<script setup>
import { onMounted, getCurrentInstance, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { proxy } = getCurrentInstance();
const treeData = ref([]);
const defaultProps = {
  children: "kids",
  label: "title",
};
const handleNodeClick = (data) => {
  if (data[defaultProps.children]) return;
  router.push({ name: "details", params: { item: JSON.stringify(data) } });
};
const getKindsList = () => {
  proxy.$http.blog.getAll().then((res) => {
    treeData.value = proxy.$utils.dataToTree(res.data.data);
  });
};
onMounted(() => {
  getKindsList();
});
</script>
<style lang="scss" scoped>
.kinds {
  .tree{
    box-shadow: var(--card-hover-box-shadow);
    color: var(--font-color);
  }
  :deep(.el-tree ){

    div{
      background-color: var(--bg-color);
    }
      .is-current{
     outline-color: red !important;
    }
  }
}
</style>
