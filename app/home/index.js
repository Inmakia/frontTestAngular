var homeController = require('./homeController');

module.exports = angular.module ('home', [])
  .controller('homeController', ['$scope', '$rootScope', 'shipmentsService', '$translate', homeController]);