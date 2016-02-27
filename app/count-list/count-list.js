angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/count-list", {
		templateUrl : "./count-list/count-list.html",
		controller : 'CountListCtrl'
	});
}])

.controller('CountListCtrl', ['ccBrowseCountries', function(ccBrowseCountries){
	console.log("This is the list of countries");
	ccBrowseCountries();
}]);