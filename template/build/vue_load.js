var isProduction = process.env.NODE_ENV === 'production';
var sourceMap = isProduction? true: false;
var utils = require('./common/utils')

/* 保持vue-cli的配置 */

module.exports = {
    loaders: utils.cssLoaders({
      sourceMap: sourceMap,
      extract: isProduction
    }),
    cssSourceMap: sourceMap,
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,  
    transformToRequire: {
      video: 'src',
      source: 'src',
      img: 'src',
      image: 'xlink:href'
    }
  }