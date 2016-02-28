angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/countries/:country/capital", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl",
		resolve: {
			country : ['$route', function($route){
				return $route.current.params.country;
				return country;
		}]}
	});
}])

.controller('CountDetailCtrl', ['$scope', 'ccCountryDetail', function($scope, ccCountryDetail){
	console.log(country);
	$scope.country = country;
	console.log($scope.country);
	// ccCountryDetail($scope.country);
	// console.log("This is a detailed view of the selected country");
}]);