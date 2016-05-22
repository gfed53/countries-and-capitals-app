angular.module('ccApp', ['ccAppViews', 'ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo : '/'
    })
}])

.run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
	    $rootScope.$on('$routeChangeStart', function() {
	        $rootScope.isLoading = true;
	    });
	    $rootScope.$on('$routeChangeSuccess', function() {
	      $timeout(function() {
	        $rootScope.isLoading = false;
	      }, 700);
	    });
	}]);
  