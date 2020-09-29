const path = require('path')
module.exports = {
  resolve: {
    modules: [path.join(__dirname, '../src'), 'node_modules'],
    alias: {
      '@': path.join(__dirname, '../src'),
      '@pages': path.join(__dirname, '../src/pages/'),
      '@components': path.join(__dirname, '../src/components/')
    }
  }
}
