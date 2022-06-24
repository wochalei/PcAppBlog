

<template>
  <div class="index">
    <div class="cardList">
         
        <card/> 
         <card/> 
          <card/> 

           <card/>  <card/> 
 
    </div>
       <el-pagination
    small
    
    layout="prev, pager, next"
    :total="50"
    class="page"
  />
  </div>
</template>
<script setup>
// import WOW from "wow.js";
import { onMounted } from "vue";
import card from '@/components/common/card/index.vue'

onMounted(() => {
  // new WOW().init();
});
</script>
 <style lang="scss" scoped>

.cardList {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5,1fr);

  grid-gap: 30px 30px ;
 


}
.page{

  display: flex;
  justify-content: center;
  padding: 30px 0;
  :deep(){
     .number,.btn-prev,.btn-next{
      background-color: transparent;
      box-shadow: var(--card-hover-box-shadow);
      color: #fff;
     }
     .is-active.number{
      color: var(--el-menu-active-color);
     }
     .number,.el-pager{
      margin: 0 3px;
     }
  }
}
@media screen and (max-width:1200px){
  .cardList{
      grid-template-columns: repeat(4,1fr);
  }
     
}
@media screen and (max-width:1000px){
  .cardList{
      grid-template-columns: repeat(3,1fr);
  }
     
}
@media screen and (max-width:1000px){
  .cardList{
      grid-template-columns: repeat(3,1fr);
  }
    
}
@media screen and (max-width:800px){
  .cardList{
      grid-template-columns: repeat(2,1fr);
  } }

  @media screen and (max-width:600px){
  .cardList{
      grid-template-columns: repeat(1,1fr);
  } }
</style>


