angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when("/countries/:country/capital", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl",
		// resolve: {
		// 	country : ['$route', function($route){
		// 		return $route.current.params.country;
		// }]}
	})
	.when("/countries/:neighbor/capital", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl",
		// resolve: {
		// 	country : ['$route', function($route){
		// 		return $route.current.params.country;
		// }]}
	})
}])

.controller('CountDetailCtrl', ['$scope', '$route', 'ccCountryDetail', 'ccCapDetail', 'ccNeighborDetail', function($scope, $route, ccCountryDetail, ccCapDetail, ccNeighborDetail){
	if($route.current.params.neighbor){
		$scope.country = $route.current.params.neighbor;
	} else {
		$scope.country = $route.current.params.country;
	}
	
	$scope.countryObj = JSON.parse($scope.country);

	ccCountryDetail($scope.countryObj.countryCode)
	.then(function(country){
		$scope.country = country.geonames[0];
	});

	ccCapDetail($scope.countryObj.capital, $scope.countryObj.countryCode)
	.then(function(capital){
		console.log(capital);
		$scope.capital = capital.geonames[0];
		console.log($scope.capital);
	});

	ccNeighborDetail($scope.countryObj.countryCode)
	.then(function(neighbors){
		console.log(neighbors);
		$scope.neighbors = neighbors.geonames;
	})

	console.log("This is a detailed view of the selected country");
}]);