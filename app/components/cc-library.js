angular.module('ccLibrary', [])
.run([ '$http', function($http){
    $http.defaults.cache = true;
  }])

.constant('CC_API_PREFIX', 'http://api.geonames.org/')
.constant('CC_USERNAME', 'gfedz4321')

.factory('ccRequest', ['$http', '$q', 'CC_API_PREFIX', 'CC_USERNAME', function($http, $q, CC_API_PREFIX, CC_USERNAME){
	return function(type, params){
		var reqParams = angular.extend({}, params, {username: CC_USERNAME}),
		reqUrl = CC_API_PREFIX+'/'+type+'?';
		return $http.get(reqUrl, {params: reqParams})
		.then(function(response){
			return $q.when(response.data);
		});
	};
}])

.factory('ccBrowseCountries', ['ccRequest', function(ccRequest){
	return function(){
		var type = 'countryInfoJSON';
		return ccRequest(type);
	};
}])

.factory('ccCapDetail', ['ccRequest', function(ccRequest){
	return function(capital, country){
		var endpoint = 'search',
		params = {
			q : capital,
			country : country,
			name_equals : capital,
			type : 'json',
			isNameRequired : true
		};
		return ccRequest(endpoint, params);
	};
}])

.factory('ccCountryDetail', ['ccRequest', function(ccRequest){
	return function(country){
		var type = 'countryInfoJSON',
		params = {
			country : country
		};
		return ccRequest(type, params);
	};
}])

.factory('ccNeighborDetail', ['ccRequest', function(ccRequest){
	return function(country){
		var type = 'neighboursJSON',
		params = {
			country : country
		};
		return ccRequest(type, params);
	};
}])




