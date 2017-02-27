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

.factory('getOneHttpService', function($http) {

	var httpRequest = {
		getById: function () {
			var requestUrl = 'http://carbillet.net/api-digitalGrenoble/users/' + idUser;
			var promise = $http.get('requestUrl')
			.then(function (response) {
				return response.data;
			});
			return promise;
		}
	};
	return {
		getById : getById
	};
})

.factory('postHttpService', function($http) {

	var httpRequest = {
		asyncPost: function () {
      var jsonPost =
      {
        username: '',
        password:  ''
      };
			var promise = $http.post('http://carbillet.net/api-digitalGrenoble/doc/#!/credentials/post_credentials/', {jsonPost})
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
      var jsonPut =
      {
        idUser: '',
        adress: '',
        age: '',
        phone: ''
      }
			var promise = $http.put('http://carbillet.net/api-digitalGrenoble/doc/#!/users/put_users', {jsonPut})
			.then(function(response){
				return response.data;
			});
			return promise;
		}
	};
	return httpRequest;
})
