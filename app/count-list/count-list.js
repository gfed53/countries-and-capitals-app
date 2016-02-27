angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/count-list", {
		templateUrl : "./count-list/count-list.html",
		controller : 'CountListCtrl'
	});
}])

.controller('CountListCtrl', ['$scope', 'ccBrowseCountries', function($scope, ccBrowseCountries){
	console.log("This is the list of countries");
	ccBrowseCountries()
	.then(function(countries){
		$scope.countries = countries.geonames;
		$scope.country1 = countries.geonames[0].countryName;
		console.log($scope.countries);
		console.log($scope.country1);
	});
}]);