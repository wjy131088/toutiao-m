<template>
  <div>
    <!-- 二级路由 -->
    <router-view></router-view>
    <!-- 导航区 -->
    <van-tabbar route>
      <van-tabbar-item to="/ ">
        <span class="text">首页</span>
        <template #icon>
          <span class="toutiao toutiao-shouye"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <span class="text">视频</span>
        <template #icon><span class="toutiao toutiao-shipin"></span></template>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <span class="text">问答</span>
        <template #icon><span class="toutiao toutiao-wenda"></span></template>
      </van-tabbar-item>
      <van-tabbar-item to="/profile">
        <span class="text">{{isLogin ? '我的' : '未登录'}}</span>
        <template #icon><span class="toutiao toutiao-wode"></span></template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isLogin'])
  }
}
</script>

<style lang="less" scoped>
.toutiao {
  font-size: 40px;
}
.text {
  font-size: 30px;
}
</style>
