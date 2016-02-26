angular.module('ccAppViews')
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/count-detail", {
		templateUrl : "./count-detail/count-detail.html",
		controller : "CountDetailCtrl"
	});
}])

.controller('CountDetailCtrl', [function(){
	console.log("This is a detailed view of the selected country");
}]);