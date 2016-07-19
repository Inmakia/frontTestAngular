module.exports = function($scope, $rootScope, $route){
    $scope.applyLanguage = function(lang){
      console.log(lang);
        $rootScope.appLanguage = lang;
        $route.reload();
    }
}