'use strict';

/**
 * @ngdoc function
 * @name coursExoApp.controller:SimilarCtrl
 * @description
 * # SimilarCtrl
 * Controller of the coursExoApp
 */
angular.module('coursExoApp')
  .controller('SimilarCtrl', function ($scope, $routeParams, serviceAjax) {
    var id = $routeParams.id;
    $scope.loading = true;
    $scope.similarMovie = function(){
      serviceAjax.similar(id).success(function(data){
        $scope.loading = false;
        $scope.movies = data.results;
        $scope.quantity = 5;
      })
    };

    $scope.similarMovie();
  });
