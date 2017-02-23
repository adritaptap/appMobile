angular.module('starter.services', [])

.service('getUsers', function($http) {
    this.getData = function(success, error) {
      $http.get('http://carbillet.net/api-digitalGrenoble/users/')
      .then(success, error);
    }
})


// .service('postUsers', function() {
//
// })

// .service('LoginService', function($q) {
//     return {
//         loginUser: function(name, pw) {
//             var deferred = $q.defer();
//             var promise = deferred.promise;
//
//             if (name == data.username && pw == data.password ) {
//                 deferred.resolve('Welcome !');
//             } else {
//                 deferred.reject('Wrong credentials.');
//             }
//             promise.success = function(fn) {
//                 promise.then(fn);
//                 return promise;
//             }
//             promise.error = function(fn) {
//                 promise.then(null, fn);
//                 return promise;
//             }
//             return promise;
//         }
//     }
// })

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data


  var chats = [{
    id: 0,
    name: 'Jérôme Lombard',
    lastText: 'Je vais mouillir !',
    face: 'img/64014_10151222269295073_1813267606_n.jpg'
  }, {
    id: 1,
    name: 'Adrien Juhem',
    lastText: 'Salut ! C\'est moi les loulous',
    face: 'img/1912230_10203764604296067_6311840730912212111_n.jpg'
  }, {
    id: 2,
    name: 'Joel Ponson',
    lastText: 'Je vais te taper là !',
    face: 'img/11069866_10205374576696270_5295172757254849060_n.jpg'
  }];

  return {
    all: function() {
      return chats;
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
