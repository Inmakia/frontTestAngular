module.exports = function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home/homeView.html',
    controller: 'homeController'
  })
  .otherwise({ 
    redirectTo: '/' 
  })
};