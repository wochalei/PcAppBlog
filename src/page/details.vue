<template>
    <div>
    个人页面
    </div>
</template>
<script setup>
import { useRoute} from "vue-router";
import {onMounted,ref } from 'vue'
 const route = useRoute();
 const  item = ref({});
 onMounted(()=>{
  item.value=JSON.parse(route.params.item);
  console.log(item.value); 
 })
</script>
<style lang="scss">
    
</style>
