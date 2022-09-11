// 所有的postcss的插件都是一个函数
const pxToRem = require('postcss-pxtorem')
module.exports = {
  // 插件
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
  // plugins: [
  //   pxToRem({
  //     // 根节点字体大小
  //     // 如果是vant 37.5 自己的代码 750
  //     // file 当前编译的css的文件路径
  //     rootValue: ({ file }) => {
  //       return /vant/.test(file) ? 37.5 : 70
  //     },
  //     protList: ['*'] //所有的属性都转成rem
  //   })
  // ]
}
