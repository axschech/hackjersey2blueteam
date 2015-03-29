'use strict';

/**
 * @ngdoc function
 * @name yeomanFrontendApp.controller:AccidentsCtrl
 * @description
 * # AccidentsCtrl
 */

angular.module('accidentsFrontendApp')
  .controller('AccidentsCtrl', function ($scope, $http, $routeParams, ngTableParams) {
	
	if ($routeParams.offset){
		var api_url = "http://dev.axschech.com/hj2/app/overview?offset="+$routeParams.offset;
	} else {
		var api_url = "http://dev.axschech.com/hj2/app/overview";
	}
	
	$http.get(api_url)
    .success(function(data){
        var data = data;
        $scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        count: 10           // count per page
	    }, {
	        total: data.length, // length of data
	        getData: function($defer, params) {
	            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    });
    });

	
  });