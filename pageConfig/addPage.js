const fs = require('fs')

const path = require('path')

const pathName = path.resolve(__dirname, 'entry.js')

const pageName = process.argv[2]

const needRouter = process.argv[3]

let entry = require('./entry.js')

entry[pageName] = `./src/${pageName}.js`

// 生成入口文件
let res = `module.exports = { \n`
Object.keys(entry).forEach(key => {
  res += `\t${key}: './src/${key}/${key}.js',\n`
})
fs.mkdirSync('./src/' + pageName)
fs.writeFileSync(pathName, res + '}')


// 生成模板文件
fs.writeFileSync(`./tpl/${pageName}.html`, `
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
fs.writeFileSync(`./src/${pageName}/${pageName}.vue`, `
<template>
  <div id="${pageName}Container">
    ${pageName}
    ${needRouter === 'y' ? '<router-view />' : ''}
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
fs.writeFileSync(`./src/${pageName}/${pageName}.js`, `
import Vue from 'vue'
import App from './${pageName}.vue'
${needRouter === 'y' ? "import router from './router' " : ''}
require('viewport-units-buggyfill').init();

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  ${needRouter === 'y' ? 'router,' : ''}
  components: {App},
  template: '<App/>'
})
`)
// 生产router配置文件
const writeRouter = (err) => {
    fs.writeFileSync(`./src/${pageName}/router/index.js`, `
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [{
    
  }]
}) 
export default router
    `)
}

if (needRouter === 'y') {
  // 生产pages文件夹
  fs.mkdirSync(`./src/${pageName}/pages`)
  fs.mkdir(`./src/${pageName}/router`, (err, data) => {
    if (!err) {
      writeRouter(err)
    } 
  })
}