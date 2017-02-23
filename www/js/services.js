angular.module('starter.services', [])

.factory('HttpRequest', ['$http', function($http){
    return{
      get: function(callback){
          $http.get('http://carbillet.net/api-digitalGrenoble/users/')
            .then(function successCallback(response) {
              results = response.data['users'];
              //console.log(results);
              //console.log(response);
              callback(results);
            });
      },

      getOne: function(id , callback){
          $http.get('http://carbillet.net/api-digitalGrenoble/users/')
            .then(function successCallback(response) {
              results = response.data['users'];
              for(var i = 0 ; i < results.length ; i ++){
                if(results[i].idUser == id){
                  console.log(results[i]);
                  callback(results[i]);
                }
              }
            });
      },

      post: function(login , callback){
          $http.post('http://carbillet.net/api-digitalGrenoble/credentials/', {json:login})
            .then(function(response) {
              console.log(login);
              callback(response.data);
            })
      },

      put: function(update, callback){
        $http.put('http://carbillet.net/api-digitalGrenoble/users/', {json:update})
            .then(function(response) {
              //console.log(update);
              callback(response.data);
            })
      },

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
