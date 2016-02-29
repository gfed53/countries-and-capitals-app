angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/countries/:country/capital", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl",
		// resolve: {
		// 	country : ['$route', function($route){
		// 		return $route.current.params.country;
		// }]}
	});
}])

.controller('CountDetailCtrl', ['$scope', '$route', 'ccCountryDetail', 'ccCapDetail', function($scope, $route, ccCountryDetail, ccCapDetail){
	console.log($route.current.params);
	$scope.country = $route.current.params.country;
	$scope.countryObj = JSON.parse($scope.country);
	console.log($scope.countryObj);
	ccCountryDetail($scope.countryObj.countryCode)
	.then(function(country){
		// console.log(country);
		$scope.country = country.geonames[0];
		console.log($scope.country);
	});
	ccCapDetail($scope.countryObj.capital, $scope.countryObj.countryCode)
	.then(function(capital){
		console.log(capital);
		$scope.capital = capital.geonames[0];
		console.log($scope.capital);
	});
	console.log("This is a detailed view of the selected country");
}]);