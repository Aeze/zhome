'use strict';

angular
  .module('zhomeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'cfp.hotkeys'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



