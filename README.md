## multiPage-vue-cli
### 基于vue2和vue-cli搭建的一款vue多页面应用脚手架，可自动生成webpack配置、模板html、入口js文件以及根组件、支持自定义中间件，集成了移动端适配。在多页面需求比较多、需要频繁迭代、新增页面的场景中可以快速搭建应用雏形。
-------------------

### 1.用法：

#### 1.安装依赖
> `npm install`

#### 2.生成一个page
> `npm run add ${pageName}`

#### 3.生成一个page并支持vueRouter
> `npm run add ${pageName} y`

#### 4.移除一个page
> `npm run rm ${pageName}`

#### 5.本地启动
> `npm start`
##### 或者
> `npm run start`

#### 6.构建
> `npm run build`

-----------------------

### 2.本地访问：
多页面的本地访问需要在webpack的devServer中配置historyApiFallback,目前集成的path路径直接是pageName,访问地址是`localhost:8088/${pathName}`也可以根据需求修改webpack.dev.conf.js中的rewritesConfig函数来自定义。

### 3.生成的页面结构

1.没有路由
`${pagename}`
   `${pagename}.vue`    
   `${pagename}.js`    
2.有路由
`${pagename}`   
   `pages`    
   `router`    
      `index.js`     
   `${pagename}.vue`    
   `${pagename}.js`    

-------------------------


项目集成了postcss-px-to-viewport等插件，解决移动端适配问题，可以参考[如何在Vue项目中使用vw实现移动端适配_vw, Layout, 布局, Vue, mobile 教程](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)

**建议**：如果是个人项目，config／index.js的host配置建议改成本机ip，便于配合autoOpenBrowser实现浏览器自动打开以及移动端访问，localhost移动端是无法访问的。如果是团队项目，建议改成0.0.0.0，便于团队中每个个人在移动端使用本机ip访问。
