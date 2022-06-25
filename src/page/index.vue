

<template>
  <div class="index">
    <div class="cardList" v-loading="loading">
      <card v-for="(item, index) in pageData" :item="item" 
        @click.native="toRouter(item)"
      />
    </div>
    <el-pagination
      v-model:currentPage="status.cPage"
      small
      layout="prev, pager, next"
      :total="status.allCount"
      :page-size ="status.pageSize"
      class="page"
      
    />
  </div>
</template>
<script setup>
// import WOW from "wow.js";
import {
  onMounted,
  getCurrentInstance,
  reactive,
  ref,
  computed,
  watch,
} from "vue";
import card from "@/components/common/card/index.vue";
import { useRouter } from "vue-router";
const { proxy } = getCurrentInstance();
const router = useRouter();
const status = reactive({
  pageSize: 10,
  pageCount: 10,
  allCount: 0,
  cPage: 1,
});
const pageList = ref([]);
const loading = ref(false);
const getPageList = () => {
  loading.value = true;
  proxy.$http.blog
    .searchAll({ page: status.cPage, pageSize: status.pageSize })
    .then(
      (res) => {
        pageList.value = res.data.data;
        status.allCount = res.data.allCount;
      },
      () => {
        alert("加载失败");
      }
    )
    .finally(() => {
      loading.value = false;
    });
};
const pageData = computed(() => {
  return pageList.value.map((item) => {
    item.created = proxy.$utils.timestampToTime(parseInt(item.created));
    return item;
  });
});
const toRouter = (item) =>{
  
 router.push({ name: 'details', params: { item:JSON.stringify(item)} })
   
}
watch(
  () => status.cPage,
  () => {
    if(loading.value)return;
    getPageList();
  }
);

onMounted(() => {
  getPageList();
});
</script>
 <style lang="scss" scoped>
.cardList {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 30px 30px;
}
.page {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  :deep() {
    .number,
    .btn-prev,
    .btn-next {
      background-color: transparent;
      box-shadow: var(--card-hover-box-shadow);
      color: #fff;
    }
    .is-active.number {
      color: var(--el-menu-active-color);
    }
    .number,
    .el-pager {
      margin: 0 3px;
    }
  }
}
@media screen and (max-width: 1200px) {
  .cardList {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 1000px) {
  .cardList {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 1000px) {
  .cardList {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 800px) {
  .cardList {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .cardList {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>


