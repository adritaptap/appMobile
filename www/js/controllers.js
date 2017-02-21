angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsListCtrl', function($scope, HttpRequest) {

  HttpRequest.get(function(data){
    $scope.results = data;
  })

  // $scope.remove = function(chat) {
  //     Chats.remove(chat);
  //   };

  // $http({
  //   method: 'GET',
  //   url: 'http://carbillet.net/api-digitalGrenoble/users/'
  //   }).then(
  //     function successCallback(response) {
  //       console.log('data success');
  //       results = response.data['users'];
  //       $scope.results = results;
  //       console.log(results);
  //       },
  //     function errorCallback(response) {
  //       console.log('data error');
  //     })


})

.controller('FriendDetailCtrl', function($scope, HttpRequest, $stateParams) {
  HttpRequest.get(function(data){
    for(var i = 0 ; i < data.length ; i ++){
      console.log($stateParams.friendId);
      if(data[i].idUser == parseInt($stateParams.friendId)){
        $scope.result =  data[i];
      }
    }
  })
})

.controller('loginCtrl',function($scope, $http){
  $scope.user = {};
  $scope.login = function() {
    var jsonData =  {username: 'jerome.lombard', password: 'jerome'}
    console.log($scope.user);
    $http.post('http://carbillet.net/api-digitalGrenoble/credentials/', {json: jsonData})
          .then(function(response) {
            console.log(response.data);
          });
  };


})

// .controller('loginCtrl',function($scope, $http){
//   $scope.user = {};
//   $scope.login = function() {
//     console.log($scope.user);
//       $http({
//           method : 'POST',
//           url : 'http://carbillet.net/api-digitalGrenoble/credentials',
//           data : $scope.user
//       }).then(function(response){
//         console.log(response);
//       });
//
//     }
// })


.controller('ChatCtrl', function($scope, HttpRequest) {

})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
