var languageController = require ('./controllers/languageController');
var shipmentsService = require ('./services/shipmentsService');

module.exports = angular.module('shared', [])
  .controller('languageController', ['$scope', '$rootScope', '$route', languageController])
  .service('shipmentsService', ['$http', shipmentsService]);