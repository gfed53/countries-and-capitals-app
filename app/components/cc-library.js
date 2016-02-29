angular.module('ccLibrary', [])

.constant('CC_API_PREFIX', 'http://api.geonames.org/')
.constant('CC_USERNAME', 'gfedz4321')

.factory('ccRequest', ['$http', '$q', 'CC_API_PREFIX', 'CC_USERNAME', function($http, $q, CC_API_PREFIX, CC_USERNAME){
	return function(type, params){
		console.log("Running request");
		var reqParams = angular.extend({}, params, {username: CC_USERNAME}),
		reqUrl = CC_API_PREFIX+'/'+type+'?';
		return $http.get(reqUrl, {params: reqParams})
		.then(function(response){
			return $q.when(response.data);
			console.log("loaded");
		});
	};
}])

// .factory('ccCountries', [function(){
// 	var countries;
// 	return {
// 		set: function(countries){
// 			countries = countries;
// 		},

// 		get: function(){
// 			return countries;
// 		}
// 	};
	
// }])

.factory('ccBrowseCountries', ['ccRequest', function(ccRequest){
	console.log("Running browse");
	return function(){
		var type = 'countryInfoJSON',
		params = {cache : true};
		return ccRequest(type, params);
	};
}])

//We will use 'search' instead to get what we want
.factory('ccCapDetail', ['ccRequest', function(ccRequest){
	console.log("Getting country's details");
	return function(capital, country){
		var endpoint = 'search',
		params = {
			q : capital,
			country : country,
			name_equals : capital,
			type : "json",
			isNameRequired : true
		};
		return ccRequest(endpoint, params);
	};
}])

.factory('ccCountryDetail', ['ccRequest', function(ccRequest){
	console.log("Getting country's details");
	return function(country){
		var type = 'countryInfoJSON',
		params = {
			country : country
		};
		return ccRequest(type, params);
	};
}])




