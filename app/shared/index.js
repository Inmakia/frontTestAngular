var languageController = require ('./controllers/languageController');

module.exports = angular.module('langController', [])
  .controller('languageController', ['$scope', '$rootScope', '$route', languageController]);