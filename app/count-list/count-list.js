angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/countries", {
		templateUrl : "./count-list/count-list.html",
		controller : 'CountListCtrl',
		resolve: {
		}
	});
}])

.controller('CountListCtrl', ['$scope', 'ccBrowseCountries', function($scope, ccBrowseCountries){
	ccBrowseCountries()
	.then(function(countries){
		$scope.countries = countries.geonames;
		angular.forEach($scope.countries, function(item){
			item.areaInSqKm = parseFloat(item.areaInSqKm);
			item.population = parseFloat(item.population);
		});
		$scope.predicate = "countryName";
		$scope.reverse = false;
		$scope.order = function(predicate){
			$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
			$scope.predicate = predicate;
		}
	});
}])

.run(function(){

})