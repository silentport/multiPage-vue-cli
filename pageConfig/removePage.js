
const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const pathName = path.resolve(__dirname, 'entry.js')
const pageName = process.argv[2]
let entry = require('./entry.js')

// 删除入口文件配置项
entry[pageName] = null
let res = `module.exports = { \n`
Object.keys(entry).forEach(key => {
  if (entry[key]) {
    res += `\t${key}: './src/${key}/${key}.js',\n`
  }
})
fs.writeFileSync(pathName, res + '}')

// 删除页面目录,  包括router、pages、.vue和.js等
cp.spawn('rm', ['-rf', `./src/${pageName}`])

// 删除模版html
fs.unlinkSync(`./tpl/${pageName}.html`) 