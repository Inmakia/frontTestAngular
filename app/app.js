var routesConfig = require('./routes');
var translateConfig = require('./translate');
var runConfig = require('./run');
var langController = require('./shared/');


angular.module('testApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate', 'langController'])
.config(['$routeProvider', routesConfig])
.config(['$translateProvider', translateConfig])
.run(['$rootScope', '$translate', '$location', runConfig]);