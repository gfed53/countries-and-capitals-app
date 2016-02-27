angular.module('ccLibrary', [])

.constant('CC_API_PREFIX', 'http://api.geonames.org/')
.constant('CC_USERNAME', 'gfedz4321')

.factory('ccRequest', ['$http', '$q', 'CC_API_PREFIX', 'CC_USERNAME', function($http, $q, CC_API_PREFIX, CC_USERNAME){
	return function(type){
		console.log("Running request");
		var reqParams = angular.extend({}, {username: CC_USERNAME}),
		reqUrl = CC_API_PREFIX+'/'+type+'?';
		return $http.get(reqUrl, {params: reqParams})
		.then(function(response){
			// return $q.when(response.data);
			console.log(response.data);
		});
	};
}])

.factory('ccBrowseCountries', ['ccRequest', function(ccRequest){
	console.log("Running browse");
	return function(){
		var type = 'countryInfo';
		return ccRequest(type);
		}
	}
])

// .factory('simpleBrowse', [function(){
// 	var url = "api.geonames.org/countryInfo?",
// 		params = {
// 			username: "gfedz4321",
// 			format: 'json'
// 		};

// 		$http({
// 			method: 'GET',
// 			url: url,
// 			params: params
// 		})
// 		.then(function(response){
// 			console.log();
			
// 		},
// 		function(response){
// 			alert('error');
// 		});
// }]);
