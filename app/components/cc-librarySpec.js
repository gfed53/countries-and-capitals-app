describe('ccRequest', function(){
	beforeEach(module('ccLibrary'));

	it('should make a request to the API server', inject(function(ccRequest, $rootScope, $httpBackend){


	}));
});

describe('ccBrowseCountries', function(){
	beforeEach(module('ccLibrary'));
	it('should make a request to retrieve the full list of countries from the API'), function(){
		module(function($provide){
			$provide.value('ccRequest', function(value){
				return value;
			});
		});
		inject(function(ccBrowseCountries){

		})
	}
});

describe('ccCapDetail', function(){
	beforeEach(module('ccLibrary'));
});