<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
// 1.下载Vant:vant@latest-v2 -S
// (1)在main.js中引入组件和css
// 3.rem适配
// (1)让rem动起来
//  yarn add amfe-flexible
// (2)盒子使用rem
// 自动的识别css中px，并将其转成rem
// post-css  css的预处理器，自己能干的事情很少，下载插件
// 下载 yarn add postcss-pxtorem
// 告诉postcss,我们要使用这个插件，新建.postcssrc.js文件
export default {}
</script>

<style>
.a {
  background-color: pink;
  width: 2rem;
  height: 2rem;
}
</style>
