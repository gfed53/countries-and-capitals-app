viewsModule.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/count-list", {
		templateUrl : "./count-list/count-list.html",
		controller : 'CountListCtrl'
	});
}]);

viewsModule.controller('CountListCtrl', [function(){
	console.log("This is the list of countries");
}]);