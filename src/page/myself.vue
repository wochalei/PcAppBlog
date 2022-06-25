<template>
  <div class="myself">
    <user class="user"><p class="job">前端开发</p></user>
    <div class="project">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="title">静态项目</div>
          </template>
          <div class="content">
           
              <a href="https://github.com/wochalei/-.git" target="blank">地址</a>
           
            <div class="explain">
              这是我第一次练习的静态项目，第一次复刻时，别人用的库实现的小动效，我自己硬是弄出来了，不过
              不好扩展，算是一个纪念吧！
            </div>
            <div class="meaning">收获：成为页面仔！</div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="原生js项目" name="2">
          <template #title>
            <div class="title">原生js项目</div>
          </template>
          <div class="content">
              <a href="https://github.com/wochalei/xiaomi"  target="blank">地址</a>
            <div class="explain">
              小米商城网站。原生js加webpack搭建的系统，因为不利用任何框架，原理是子组件模板根据正则替换数据后，父组件调用子组件的方法（返回替换后数据的模板），
              就这样层层嵌套，最后顶层innerHtml将字符串解析为Dom节点。是学框架前系统的过渡.
            </div>
            <div class="meaning">收获：体会一下工程化</div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="vue2项目" name="3">
          <template #title>
            <div class="title">vue2项目+node接口</div>
          </template>
          <div class="content">
            <div class="targetUrl">
              <a href="https://github.com/wochalei/blogback"  target="blank">前端地址</a>
              <a href="https://github.com/wochalei/blogend"  target="blank">后端地址</a>
            </div>
            <div class="explain">
              vue2框架的博客系统，因为新手我也不太懂，整体项目文件结构不太清晰，但还是能区别一下o(*￣▽￣*)o，回头看有一些组件规划不太好，有一些取值的方法很笨(●'◡'●)，
              后端项目文件架构也是有点累赘.就编辑器用了别人的组件，其他就硬敲(●ˇ∀ˇ●)，虽然看起来好像也没几个组件。没设计图，样式怎么调都不咋顺眼，所以看起来不是难看，就也还行.
            </div>
            <div class="meaning">
              收获：vue框架以及原理，vueRouter，发布订阅模式，完整的前后端实现体验,响应式，web安全
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="uniapp项目" name="4">
          <template #title>
            <div class="title">uniapp项目</div>
          </template>
          <div class="content">
            <div class="targetUrl"><span>地址</span>占位</div>
            <div class="explain">
              社区交友项目。这是uniapp+vue3开发的，看视频学的它是vue2，重写一下，没敲完，就敲几个页面,本质还是页面仔+框架实现
              这些视频逻辑都不强，后面觉得好重复就没弄了，
              总的来说，重点是会看文档，语法还是vue3，其他以前组件怎么写就这么写。只是用compositionAPI实现.多端的差异，文档里有条件编译,可以区分来,其他的都是调接口，使用组件库。
              还有一个是第三方接口（这个我还没体验下怎么用）
            </div>
            <div class="meaning">收获：看uniapp文档，compositionAPI，组件库</div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Electron项目" name="5">
          <template #title>
            <div class="title">Electron项目</div>
          </template>
          <div class="content">
            <a href="https://github.com/wochalei/PcAppBlog"  target="blank">地址</a>
            <div class="explain">
              Electron+Vite+Vue3下，重构上面的vue2博客系统，用了element组件库，增加了动态效果，风格上转变为暗黑模式.本质上Electron就相当于套了个壳子，前后端集成一起，
              一个能写入文件读文件的网站是有多可怕( ఠൠఠ )
            </div>
            <div class="meaning">收获：看Electron文档,样式变量，组件库</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
     <div class="conclusion">
       <h3>conclusion</h3>
       <div class="Ctext">
        <p>  回头看，发现不管什么框架，vue还是react，它们最终的风格都趋于一致，函数化。别听什么react学习成本高之类的狗屁话，都一样的就是要按照不同的开发风格.而且最后两种框架风格都趋向一致了。
        至于其他uniapp,electron这些框架套了个盒子然后用vue或react语法。差异的不同重点还是看各自的文档。</p>
        <p>总得来说，后面项目收获不那么大了，相比于以前的项目，我发现不管是视频上或文档上的，其实本质上是讲技术，而不是怎么用技术，感觉一直再换着框架做重复的事。</p>
        <p>这倒让我突然明白以前看到的一句话:它们只是工具，重点是使用人的思维。</p>
        <p>可是我要怎么去提升呢，工程思维，业务逻辑能力，设计模式等都是我薄弱的地方。往后将往这方面发展，先摸索摸索(☆▽☆)。</p>
       </div>
     </div>
  </div>
</template>
<script setup>
import user from "@/components/user/index.vue";
import { ref } from "vue";
import { InfoFilled } from "@element-plus/icons-vue";
</script>
<style lang="scss"  scoped>
$padding-right:21px;
.myself {
  height: 100%;
  
  .user{
    padding-right: $padding-right;
  }
  .job {
    text-align: center;
    font-size: 12px;
    margin: 6px 0;
  }
  :deep(.user) {
    width: 100%;
    height: auto;
    img {
      width: 150px;
    }
    .name {
      font-size: 20px;
    }
    .say {
      font-size: 14px;
      width: 600px;
      text-indent: 0px;

      font-size: 15px;
      line-height: 22.5px;
      text-align: center;
    }
  }
  .project {
    :deep() {
      .el-collapse {
        border: none;
        box-shadow: var(--card-hover-box-shadow);
        div {
          background-color: var(--bg-color) !important;
          border: none;
          color: var(--font-color);
        }
      }
    }

    .title {
      width: 100%;
      font-weight: 600;
      text-align: center;

      border-bottom: 1px solid var(--bg-color);
    }
  }
  .content{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     padding-right: $padding-right;
     .targetUrl{
      a{
        margin-right: 10px;
      }
     }
  }
  .conclusion{
    
    padding-right: $padding-right;
    padding-bottom: 20px;
    h3{
      margin: 20px;
      text-align: center;
    }
    .Ctext{
      color: #999;
      font-size: 12px;
      text-indent: 2em;
      line-height: 18px;
    }
  }
}
</style>
