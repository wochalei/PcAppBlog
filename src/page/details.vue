<template>
    <div class="details">
        <h2>{{item.title}}</h2>
     <v-md-preview :text="item.content"></v-md-preview>
    </div>
</template>
<script setup>
import { useRoute} from "vue-router";
import {onMounted,ref } from 'vue'
 const route = useRoute();
 const  item = ref({});
 onMounted(()=>{
  item.value=JSON.parse(route.params.item);
 })
</script>
<style lang="scss" scoped>
    .details{
        text-align: center;
    }
</style>
