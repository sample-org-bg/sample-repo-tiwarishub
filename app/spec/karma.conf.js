// Karma configuration
// Generated on Sun May 04 2014 18:27:46 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
  config.set({

      preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          '../mainFeature/mainDirective.js':['coverage'],
          '../mainFeature/mainSvc.js':['coverage'],
          '../mainFeature/mainCtrl.js':['coverage'],
          '../bootstrap/bootstrap.js':['coverage']
      },

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        '../../scripts/angular.min.js',
        '../../scripts/angular-mocks.js',
        '../mainFeature/*.js',
        '../bootstrap/bootstrapper.js',
        'mainFeatureSpec/*.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
