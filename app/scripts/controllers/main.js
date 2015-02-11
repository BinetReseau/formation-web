'use strict';

/**
 * @ngdoc function
 * @name fBrweb1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fBrweb1App
 */
angular.module('fBrweb1App')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.email = "";
    $scope.connexion = function(email) {
        $http.get('connexion.php?mail=' + email).
          success(function(data, status, headers, config) {
            $location.path('/cours');
          }).
          error(function(data, status, headers, config) {
              $location.path('/cours');
          });
    };
  });
