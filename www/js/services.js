angular.module('starter.services', [])

.factory('HttpRequest', ['$http', function($http){
    return{
      get: function(callback){
          $http.get('http://carbillet.net/api-digitalGrenoble/users/')
            .then(function successCallback(response) {
              results = response.data['users'];
              console.log(results);
              callback(results);
            });
      },
      post: function(callback){
          $http.post('http://carbillet.net/api-digitalGrenoble/credentials', data)
            .then(function(response) {
              console.log(response);
            })
      }
    }
  }]);
//
//   return {
//     all: function() {
//
//       return results;
//     },
//     remove: function(chat) {
//       chats.splice(chats.indexOf(chat), 1);
//     },
//     get: function(chatId) {
//       for (var i = 0; i < chats.length; i++) {
        // if (chats[i].id === parseInt(chatId)) {
//           return chats[i];
//         }
//       }
//       return null;
//     }
//   };
// });
