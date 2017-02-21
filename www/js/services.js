angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  $http({
    method: 'GET',
    url: 'http://carbillet.net/api-digitalGrenoble/users/'
    }).then(
      function successCallback(response) {
        console.log('data success');
        results = response.data['users'];
        console.log(results);
        },
      function errorCallback(response) {
        console.log('data error');
      })

  return {
    all: function() {

      return results;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
