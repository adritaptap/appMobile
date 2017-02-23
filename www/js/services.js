angular.module('starter.services', [])

.factory('getHttpService', function($http) {

	var httpRequest = {
		asyncGet: function () {
			var promise = $http.get('http://carbillet.net/api-digitalGrenoble/users/')
			.then(function (response) {
				return response.data;
			});
			return promise;
		}
	};
	return httpRequest;
})

.factory('postHttpService', function($http) {

	var httpRequest = {
		asyncPost: function () {
			var promise = $http.post('http://carbillet.net/api-digitalGrenoble/doc/#!/credentials/post_credentials/', 'username', 'password')
			.then(function (response) {
				return response.data;
			});
			return promise;
		}
	};
	return httpRequest;
})

.factory('putHttpService', function($http) {
	var httpRequest = {
		asyncPut: function() {
			var promise = $http.put('http://carbillet.net/api-digitalGrenoble/doc/#!/users/put_users', 'idUser', 'adress', 'age', 'phone')
			.then(function(response){
				return response.data;
			});
			return promise;
		}
	};
	return httpRequest;
})
