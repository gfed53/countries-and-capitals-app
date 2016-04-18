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
	// Accordion Test

	console.log("This is the list of countries: "+ccBrowseCountries());
	ccBrowseCountries()
	.then(function(countries){
		$scope.countries = countries.geonames;
		// $(function(){
		// 	console.log("running");
		// 	$('.accordion').accordion({collapsible: true});
		// });
		angular.forEach($scope.countries, function(item){
			item.areaInSqKm = parseFloat(item.areaInSqKm);
			item.population = parseFloat(item.population);
		});
		console.log($scope.countries);
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