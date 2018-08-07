## multiPage-vue-cli
基于vue2和vue-cli搭建的一款vue多页面应用脚手架，可自动生成webpack配置、模板html、入口js文件以及根组件支持自定义中间件，集成了移动端适配
-------------------

用法：

### 1.安装依赖
> `npm install`

### 2.生成一个page
> `npm run add ${pageName}`

### 3.生成一个page并支持vueRouter
> `npm run add ${pageName} y`

### 4.移除一个page
> `npm run rm ${pageName}`

### 5.本地启动
> `npm start`
#### 或者
> `npm run start`

### 6.构建
> `npm run build`

--------------------

**注意**：如果是个人项目，config／index.js的host配置建议改成本机ip，便于配合autoOpenBrowser实现浏览器自动打开以及移动端访问，
localhost移动端是无法访问的。如果是团队项目，建议改成0.0.0.0，便于团队中每个个人在移动端使用本机ip访问。
