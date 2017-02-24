angular.module('starter.services', [])

.factory('httpService', function($http) {

	var httpRequest = {
		asyncGet: function () {
			var promise = $http.get('http://carbillet.net/api-digitalGrenoble/users/')
			.then(function (response) {

				return response.data;
			});

			return promise;
		},


		asyncPost: function (data) {
			var promise = $http.post('http://carbillet.net/api-digitalGrenoble/credentials/', {json: data})
			.then(function (response) {

				return response.data;
			});

			return promise;
		},
		
		asyncPut: function (data) {
			var promise = $http.put('http://carbillet.net/api-digitalGrenoble/users/', {json: data})
			.then(function (response) {

				return response.data;
			});

			return promise;
		}
	}


	return httpRequest;
	
	
});		


