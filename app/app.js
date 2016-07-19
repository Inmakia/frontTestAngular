var routesConfig = require('./routes');
var translateConfig = require('./translate');
var runConfig = require('./run');
var home = require('./home/');
var shared = require('./shared/');


angular.module('testApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate', 'home', 'shared'])
.config(['$routeProvider', routesConfig])
.config(['$translateProvider', translateConfig])
.run(['$rootScope', '$translate', '$location', runConfig]);