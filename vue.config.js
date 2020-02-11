const path = require('path')

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: { less: { javascriptEnabled: true } }
  },
  configureWebpack: {
    devtool: "cheap-module-eval-source-map"
  },
  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js']

    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}