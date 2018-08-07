
const fs = require('fs')
const path = require('path')
const pathName = path.resolve(__dirname, 'entry.js')
const pageName = process.argv[2]
let entry = require('./entry.js')
entry[pageName] = null
// 生成入口文件
let res = `module.exports = { \n`
Object.keys(entry).forEach(key => {
  if (entry[key]) {
    res += `\t${key}: './src/${key}.js',\n`
  }
})
fs.writeFileSync(pathName, res + '}')
fs.unlinkSync(`./src/${pageName}.js`)
fs.unlinkSync(`./src/${pageName}.vue`)
fs.unlinkSync(`./${pageName}.html`)