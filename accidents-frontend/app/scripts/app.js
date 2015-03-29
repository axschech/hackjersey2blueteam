'use strict';

/**
 * @ngdoc overview
 * @name accidentsFrontendApp
 * @description
 * # accidentsFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('accidentsFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AccidentsCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/accident.html',
        controller: 'AccidentCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
