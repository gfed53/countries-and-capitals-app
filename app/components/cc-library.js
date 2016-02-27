angular.module('ccLibrary', [])

.constant('CC_API_PREFIX', 'http://api.geonames.org/')
.constant('CC_USERNAME', 'gfedz4321')

.factory('ccRequest', ['$http', '$q', 'CC_API_PREFIX', 'CC_USERNAME', function($http, $q, CC_API_PREFIX, CC_USERNAME){
	return function(type){
		console.log("Running request");
		var reqParams = angular.extend({}, {username: CC_USERNAME, format: 'json'}),
		reqUrl = CC_API_PREFIX+'/'+type+'?';
		return $http.get(reqUrl, {params: reqParams})
		.then(function(response){
			return $q.when(response.data);
			console.log("loaded");
		});
	};
}])

.factory('ccBrowseCountries', ['ccRequest', function(ccRequest){
	console.log("Running browse");
	return function(){
		var type = 'countryInfoJSON';
		return ccRequest(type);
		}
	}
])

// .factory('cc')

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
