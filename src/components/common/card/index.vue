<template>
  <div class="card">
    <div class="img"><img :src="imgSrc" alt="" srcset="" /></div>
    <div class="message">
      <div class="title">SQL注入</div>
      <div class="brief">
        sql注入是一直利用绕过闭合执行的数据操作语法语法语法语法语法zzaz你好
      </div>
    </div>
    <div class="mask"></div>
    <div class="mask_bg"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const imgSrc = ref("http://47.113.185.219:7777/tmp/contentground.jpg");
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 3/4;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  .img {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    overflow: hidden;
    img {
      transition: all 0.3s;
      height: 100%;
    }
  }

  .mask,
  .mask_bg {
    position: absolute;
    transition: all 0.7s;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
  .mask {
    opacity: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
  &:hover {
    .mask {
      opacity: 1;
    }
    .img {
      img {
        transform: scale(0.5);
      }
    }
    .message {
      .title {
        transform: translateY(10px);
      }
      .brief {
        transform: translateY(10px);
        opacity: 1;
      }
    }
  }

  .message {
    position: absolute;
    bottom: 20px;
    width: 100%;

    z-index: 100;

    padding: 0 10px;
    transition: all 0.4s;
    .title {
      font-weight: 600;
      margin-bottom: 5px;
      text-align: center;
       transition: transform 0.4s ;
      transform: translateY(40px);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .brief {
      font-size: 12px;
      transform: translateY(60px);
      transition: transform 0.4s 0.2s;
      opacity: 0;
      word-wrap: break-word;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
}
</style>