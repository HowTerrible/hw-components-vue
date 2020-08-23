const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: { less: { javascriptEnabled: true } }
  },
  configureWebpack: {
    devtool: "cheap-module-eval-source-map",
    resolve: {
      alias: {
        '@components': resolve("src/components"),
        '@js': resolve("src/js"),
        '@styles': resolve("src/styles"),
        '@directives': resolve("src/directives")
      }
    }
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
        path.resolve(__dirname, './src/styles/common-color.styl'),
        path.resolve(__dirname, './src/styles/common-style.styl')
      ],
    })
}