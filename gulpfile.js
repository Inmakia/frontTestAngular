'use strict';

var gulp = require('gulp');
var config = require('./gulp/config.js');
var tasks = require('require-dir')('gulp/tasks');

(function importTasks(){
  for (var key in tasks) {
    if(tasks.hasOwnProperty(key)) {
      tasks[key](gulp, config);
    }
  }
} )();