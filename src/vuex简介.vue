<template>
  <div>
    <!-- <router-view></router-view> -->
    <h1>{{ count }}</h1>
    <h2>{{ bigNum }}</h2>
    <button @click="SET_COUNT(10)">点击+1</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
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
export default {
  methods: {
    /* increment() {
      this.$store.commit('SET_COUNT', 10)
    } */
    ...mapMutations(['SET_COUNT'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['bigNum'])
  }
}
</script>

<style>
.a {
  background-color: pink;
  width: 2rem;
  height: 2rem;
}
</style>
