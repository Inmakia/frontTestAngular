module.exports = function ($scope, $rootScope, shipmentsService, $translate) {
  $scope.sortType = 'status';
  $scope.sortReverse = false;
  shipmentsService.getShipments().success(function(data){
    $scope.shipments = data.shipments;
  });

  $scope.sortBy = function(sortType) {
    $scope.sortReverse = ($scope.sortType === sortType) ? !$scope.sortReverse : false;
    $scope.sortType = sortType;
  };
};