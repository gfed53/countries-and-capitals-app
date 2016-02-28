angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/countries", {
		templateUrl : "./count-list/count-list.html",
		controller : 'CountListCtrl'
	});
}])

.controller('CountListCtrl', ['$scope', 'ccBrowseCountries', function($scope, ccBrowseCountries){
	console.log("This is the list of countries");
	ccBrowseCountries()
	.then(function(countries){
		$scope.countries = countries.geonames;
		console.log($scope.countries);
	});
}]);