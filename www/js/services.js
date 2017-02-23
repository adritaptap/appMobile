angular.module('starter.services', [])

.factory('httpService', function($http) {

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


});
