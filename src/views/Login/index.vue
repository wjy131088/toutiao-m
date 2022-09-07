<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="登录" class="nav-bar" />
    <!-- 输入框 -->
    <van-form @submit="onSubmit" class="form" ref="form">
      <van-field
        v-model="mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="mobileRules"
      >
        <template #label> <span class="toutiao toutiao-shouji"></span></template
      ></van-field>
      <van-field
        v-model="code"
        type="password"
        name="密码"
        placeholder="请输入验证码"
        :rules="codeRules"
        ><template #label>
          <span class="toutiao toutiao-yanzhengma"></span>
        </template>
        <template #button>
          <!-- 获取验证码 -->
          <van-button
            class="btn"
            block
            type="default"
            size="small"
            round
            native-type="button"
            v-if="isShowCodeBtn"
            @click="sendCode"
            >获取验证码</van-button
          >
          <!-- 验证码倒计时 -->
          <van-count-down
            :time="3 * 1000"
            v-else
            format="ss秒"
            @finish="isShowCodeBtn = true"
          />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { codeRules, mobileRules } from './rule'
// 引入API
import { login, sendCodeAPI } from '@/api'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      mobile: '',
      code: '',
      mobileRules,
      codeRules,
      isShowCodeBtn: true
    }
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    async onSubmit() {
      this.loading()
      try {
        // 登录
        const { data } = await login(this.mobile, this.code)
        // 将token放入vuex
        this.SET_TOKEN(data.data)
        // /跳转路由
        this.$router.push('/profile')
        // 成功的提示
        this.$toast.success('登录成功')
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.log(error)
          this.$toast.fail(error.response.data.message)
        } else {
          // console.dir(error)
          this.$toast.clear()
          throw error
        }
      }
    },
    loading() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        dueation: 0
      })
    },
    async sendCode() {
      // 验证用户是否输入了手机号
      await this.$refs.form.validate('mobile')
      this.loading()
      try {
        await sendCodeAPI(this.mobile)
        // 2.显示倒计时组件
        this.isShowCodeBtn = false
        this.$toast.success('发送验证码成功')
      } catch (error) {
        if (
          (error.response && error.response.status === 429) ||
          error.response.status === 404
        ) {
          // axios错误
          this.$toast.fail(error.response.data.message)
        } else {
          this.$toast.clear()
          throw error
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nav-bar {
  background-color: #3296fa;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
}
:deep(.form) {
  .van-cell__title {
    flex: 1;
  }
  .van-cell__value {
    flex: 20;
  }
  .toutiao {
    font-size: 40px;
  }
}
.btn {
  height: 0.64rem;
  background-color: #eee;
  color: #a58594;
}
</style>
