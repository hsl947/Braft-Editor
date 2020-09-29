const { override, addWebpackAlias, fixBabelImports } = require('customize-cra')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const alias = require('./alias')
const webpack = require('webpack')

const addCustom = () => (config) => {
  let plugins = [new BundleAnalyzerPlugin({ analyzerPort: 7777 })]
  config.plugins = [...config.plugins, ...plugins]
  return config
}

const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10
          },
          default: {
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true
          }
        }
      }
    }

    // 关闭sourceMap
    config.devtool = false
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024
      }),
      new webpack.optimize.AggressiveMergingPlugin(), //合并块
      new webpack.optimize.ModuleConcatenationPlugin()
      // new webpack.DefinePlugin({
      //   // 减少 React 大小的关键
      //   'process.env': {
      //     NODE_ENV: JSON.stringify('production')
      //   }
      // })
    )
  }
  return config
}

module.exports = override(
  addWebpackAlias(alias.resolve.alias),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  // addCustom(),
  addCustomize()
)
