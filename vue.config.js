module.exports = {
    publicPath: '',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://open.staging.qingting.fm',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}