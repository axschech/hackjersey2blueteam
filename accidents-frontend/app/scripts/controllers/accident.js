'use strict';

/**
 * @ngdoc function
 * @name accidentsFrontendApp.controller:AccidentCtrl
 * @description
 * # AccidentCtrl
 * Controller of the accidentsFrontendApp
 */
angular.module('accidentsFrontendApp')
  .controller('AccidentCtrl', function ($scope, $http, $routeParams) {
    
	var api_url = "http://dev.axschech.com/hj2/app/details/"+$routeParams.id;

	$http.get(api_url)
    .success(function(data){
        var data = data;
        $scope.accident = data;
    });
  });
