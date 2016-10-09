module.exports = function(app) {
    app.controller('HomeController', ($scope) => {
        $scope.hello = 'hello world'
    })
}