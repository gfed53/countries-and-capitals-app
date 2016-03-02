angular.module('ccApp', ['ccAppViews', 'ngRoute', 'ngAnimate'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({
      redirectTo : '/'
    })
}])

.run(function($rootScope, $location, $timeout) {
	    $rootScope.$on('$routeChangeStart', function() {
	        $rootScope.isLoading = true;
	    });
	    $rootScope.$on('$routeChangeSuccess', function() {
	      $timeout(function() {
	        $rootScope.isLoading = false;
	      }, 1000);
	    });
	});
  