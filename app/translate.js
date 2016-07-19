module.exports = function($translateProvider) {
  var defaultLang = function(localeLang) {
    var lang = 'en';
    switch(localeLang) {
      case 'es':
        lang = 'es';
        break;
      case 'en':
        lang = 'en';
        break;
      default: break;
    }
    return lang;
  };
  $translateProvider.preferredLanguage(defaultLang(navigator.language.substring(0,2).toLowerCase()));
  $translateProvider.useStaticFilesLoader({
    prefix: './assets/languages/',
    suffix: '.json'
  });
  $translateProvider.useSanitizeValueStrategy('escaped');
}