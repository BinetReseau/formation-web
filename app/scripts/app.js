'use strict';

/**
 * @ngdoc overview
 * @name fBrweb1App
 * @description
 * # fBrweb1App
 *
 * Main module of the application.
 */
angular
  .module('fBrweb1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cours', {
        templateUrl: 'views/cours.html',
        controller: 'CoursCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, $anchorScroll, $routeParams) {
$anchorScroll.yOffset = 70;
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();
  });
})
;
