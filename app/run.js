module.exports = function($rootScope, $translate, $location){
  var defaultLang = function(localeLang) {
        var lang = 'en';
    switch(localeLang) {
      case 'es':
        lang = 'es';
        break;
      case 'en':
        lang = 'en';
        break;
      default : break;
    }
    return lang;
  };
  $rootScope.appLanguage = defaultLang(navigator.language.substring(0,2).toLowerCase());
  $rootScope.$watch('appLanguage', function(newValue){
    $translate.use(newValue);
  });
  $rootScope.redirectToPath = function(pathname){
    $location.path(pathname);
  };
}