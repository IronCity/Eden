module.exports = function(app) {
    app.controller('TestController', ($scope) => {
        $scope.hello = 'test world'
        console.log('test')
    })
}