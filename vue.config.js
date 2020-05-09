//导出一个包含选项的对象
module.exports = {
    devServer: {
        proxy: {
            // 让服务器拦截'/AJAX'开头的请求，由其代理。解决跨域问题
            '/ajax': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}