

<template>
  <div class="tmp">
    index
  </div>

</template>
<script setup>
 import WOW from 'wow.js'
 import {onMounted} from 'vue'
 onMounted(()=>{
  new WOW().init();
 })
</script>
<style>

</style>
