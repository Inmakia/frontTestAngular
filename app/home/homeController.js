module.exports = function ($scope, $rootScope, shipmentsService, $translate) {
  $scope.sortType = 'status';
  $scope.sortReverse = false;
  shipmentsService.getShipments().success(function(data){
    $scope.shipments = data.shipments;
  });
  $scope.$watch($scope.sortType, $scope.sortReverse);
};