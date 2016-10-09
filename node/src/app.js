//可以采用以下这种方式引入静态资源, 除了css, 还包括字体, 图片等
;[
    './resources/app.css',
    './resources/app2.css'
].forEach(require)

//webpack无法使用node模块, 这里了require是webpack自己了require, 不是node的require
/*const fs = require('fs')
fs.readDir('./', (file) => {
    console.log(file)
})*/

const angular = require('angular')
const eden = angular.module('eden', [])

//引入controller
;[
    './controller/HomeController',
    './controller/TestController'
].forEach((controller) => {
    require(controller)(eden)
})