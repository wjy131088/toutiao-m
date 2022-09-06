const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint检查
  lintOnSave: false,
  configureWebpack: {
    mode: 'development',
    // 自动打开浏览器
    devServer: {
      open: true,
      port: 8888,
      host: 'localhost'
    }
  }
})
