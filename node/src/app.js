require('./app.css')
const angular = require('angular')

const eden = angular.module('eden', [])

eden.controller('HomeController', ($scope) => {
    $scope.hello = 'hello world'
})