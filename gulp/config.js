var distPath = './dist';
var rootPath = '.';
var app = './app/';
var appJs = app+'app.js';

var config = {

  server:{
    distPath: distPath,
    src: [rootPath, app],
    host: '0.0.0.0',
    open: false,
    port: 8000,
    livereload: true,
    directoryListing: false
  },

  build: {
    appPath: appJs,
    distPath: distPath
  }
};

module.exports = config;