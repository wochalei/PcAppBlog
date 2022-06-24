<template>
    <div class="user">
        <img src="@/assets/pic/usePic.gif" alt="" srcset=""> 
        <p class="name">王大帅</p>
        <slot></slot>
        <p class="say">If you wish to succeed, you should use persistence as 
            your good friend, experience as your reference, prudence as your brother and hope as your sentry.</p>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
 .user{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding: 20px 0;
    height: 250px;
    width: var(--menu_width);
    
    overflow: hidden;
  img{  
        margin: auto;
        width: 40%;
        border-radius: 50%;
    }
    .name{
        margin: 10px 0;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
    }

    .say{
        width: 80%;
        margin: auto;
        font-size: 12px;
        text-align:justify;
        text-indent: 2em;
        zoom: 0.9;
        color: #999;
    }
 }
</style>