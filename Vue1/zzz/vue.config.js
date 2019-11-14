const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://169.254.115.82:3000',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}