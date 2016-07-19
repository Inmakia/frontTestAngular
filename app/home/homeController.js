module.exports = function ($scope, $rootScope, shipmentsService, $translate) {
  shipmentsService.getShipments().success(function(data){
    $scope.shipments = data;
    console.log($scope.shipments);
  }
)};

// var myAppHome = angular.module('myAppHome', ['cartServices', 'productComponent']);

// myAppHome.controller('homeController', ['$scope', 'cartService', function($scope, cartService) {
//   cartService.getCatalog().success(function(res){
//     $scope.catalog = res;
//     cartService.setCatalog(res);
//   });

//   $scope.cart = cartService.cart;
//   $scope.total = cartService.total;

//   $scope.$watch($scope.total, cartService.getTotal());
// }]);