'use strict';

/**
 * @ngdoc overview
 * @name coursExoApp
 * @description
 * # coursExoApp
 *
 * Main module of the application.
 */
angular
  .module('coursExoApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/popular', {
        templateUrl: 'views/movies.html',
        controller: 'PopularCtrl'
      })
      .when('/search/:query', {
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl'
      })
      .when('/info/:id', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/similar/:id', {
        templateUrl: 'views/similar.html',
        controller: 'SimilarCtrl'
      })
      .when('/populartv', {
        templateUrl: 'views/populartv.html',
        controller: 'PopulartvCtrl'
      })
      .otherwise({
        redirectTo: '/popular'
      });
  });
