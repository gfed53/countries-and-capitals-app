angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl : "./home/home.html",
		controller : 'HomeCtrl'
	});
}])

.controller('HomeCtrl', [function(){
}]);