module.exports = function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home/homeView.html'
  })
  .otherwise({ 
    redirectTo: '/' 
  })
};