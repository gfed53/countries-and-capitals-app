angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/countries/:country", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl",
	});
}])

.controller('CountDetailCtrl', ['$scope', '$route', 'ccCountryDetail', 'ccCapDetail', 'ccNeighborDetail', function($scope, $route, ccCountryDetail, ccCapDetail, ccNeighborDetail){
	$scope.country = $route.current.params.country;
	$scope.countryObj = JSON.parse($scope.country);
	
	ccCountryDetail($scope.countryObj.countryCode)
	.then(function(country){
			$scope.country = country.geonames[0];
			ccCapDetail($scope.country.capital, $scope.country.countryCode)
			.then(function(capital){
				$scope.capital = capital.geonames[0];
			});
		}
	);

	ccNeighborDetail($scope.countryObj.countryCode)
	.then(function(neighbors){
		$scope.neighbors = neighbors.geonames;
	});
}]);