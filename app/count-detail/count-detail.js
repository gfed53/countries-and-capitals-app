angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/countries/:country", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl",
		// resolve : {
		// 	country2 : ['$route', function($route){
		// 		return $route.current.params.country;
		// }]}
	});
}])

.controller('CountDetailCtrl', ['$scope', '$route', 'ccCountryDetail', 'ccCapDetail', 'ccNeighborDetail', function($scope, $route, ccCountryDetail, ccCapDetail, ccNeighborDetail){
	$scope.country = $route.current.params.country;
	$scope.countryObj = JSON.parse($scope.country);
	//We're using the params of the neighbor, that's why we're not getting capital back.
	console.log($scope.countryObj);

	ccCountryDetail($scope.countryObj.countryCode)
	.then(function(country){
			$scope.country = country.geonames[0];
			console.log($scope.country);
			ccCapDetail($scope.country.capital, $scope.country.countryCode)
			.then(function(capital){
				console.log(capital);
				$scope.capital = capital.geonames[0];
				console.log($scope.capital);
			});
		}
	);

	//This is running simultaniously with ccCountryDetail, that's why $scope.country won't be changed before this runs.
	// ccCapDetail($scope.countryObj.capital, $scope.countryObj.countryCode)
	// .then(function(capital){
	// 	console.log(capital);
	// 	if(capital.geonames){
	// 		$scope.capital = capital.geonames[0];
	// 	}
	// 	console.log($scope.capital);
	// });

	ccNeighborDetail($scope.countryObj.countryCode)
	.then(function(neighbors){
		console.log(neighbors);
		$scope.neighbors = neighbors.geonames;
	});

	console.log("This is a detailed view of the selected country");
}]);