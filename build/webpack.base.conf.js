const autoprefixer = require("autoprefixer")

module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            vueLoaderConfig,
            postcss: [require('autoprefixer')({
                browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie> 8']
            })]
        }
    }]
}