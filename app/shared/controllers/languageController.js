module.exports = function($scope, $rootScope, $route){
    $scope.applyLanguage = function(lang){
        $rootScope.appLanguage = lang;
        $route.reload();
    }
}