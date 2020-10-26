//导出一个包含选项的对象
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
          ? '/maizuo/'
          : '/'
}