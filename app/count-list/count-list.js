viewsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/count-list", {
		templateUrl : "./count-list/count-list.html",
		controller : 'CountListCtrl'
	});
}]);