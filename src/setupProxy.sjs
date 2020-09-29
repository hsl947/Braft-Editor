const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/sndj', {
      target: 'http://121.40.239.167:9008',
      pathRewrite: {
        '^/sndj': '/',
        changeOrigin: true
      }
    })
  )
  app.use(
    createProxyMiddleware('/oss', {
      target: 'http://sndj.oss-cn-hangzhou.aliyuncs.com',
      pathRewrite: {
        '^/oss': '/',
        changeOrigin: true
      }
    })
  )
}
