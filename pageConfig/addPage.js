const fs = require('fs')

const path = require('path')

const pathName = path.resolve(__dirname, 'entry.js')

const pageName = process.argv[2]

let entry = require('./entry.js')

entry[pageName] = `./src/${pageName}.js`

// 生成入口文件
let res = `module.exports = { \n`
Object.keys(entry).forEach(key => {
  res += `\t${key}: './src/${key}.js',\n`
})
fs.writeFileSync(pathName, res + '}')


// 生成模板文件
fs.writeFileSync(`./${pageName}.html`, `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>${pageName}</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
`)

// 生成入口vue文件
fs.writeFileSync(`./src/${pageName}.vue`, `
<template>
  <div id="${pageName}Container">
    ${pageName}
  </div>

</template>

<script>
export default {

};
</script>

<style scoped>

</style>
`)

// 生成入口js文件
fs.writeFileSync(`./src/${pageName}.js`, `
import Vue from 'vue'
import App from './${pageName}.vue'

require('viewport-units-buggyfill').init();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
`)