'use strict';

/**
 * @ngdoc overview
 * @name employeeManagement
 * @description
 * # employeeManagement
 *
 * Main module of the application.
 */
angular
  .module('employeeManagement', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/dashboad.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
