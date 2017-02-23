angular.module('starter.controllers', [])

// .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
//     $scope.login = function() {
//         LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
//             $state.go('tab.dash');
//         }).error(function(data) {
//             var alertPopup = $ionicPopup.alert({
//                 title: 'Login failed!',
//                 template: 'Please check your credentials!'
//             });
//         });
//     }
// })

.controller('UsersCtrl', function($scope, getUsers){
  $scope.submit = function(){
    $scope.getUsers = getUsers.getData($scope.success, $scope.error);
  }

  $scope.success = function(data){
    console.log(data);
    $scope.username = data.data.username;
  }
  $scope.error = function(error){
    sconole.log(error);
  }
})

.controller('DashCtrl', function($scope) {

})

.controller('FriendsListCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
     Chats.remove(chat);
  };

  $scope.remove = function(chat) {
      Chats.remove(chat);
    };

  $http.get('http://carbillet.net/api-digitalGrenoble/users/')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data['users'][0]);
      $scope.results = data['users'];

    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = results.data;
    });

})

.controller('FriendDetailCtrl', function($scope, Chats) {

})

.controller('ChatCtrl', function($scope, Chats) {

})

.controller('AccountCtrl', function($scope) {

  $scope.settings = {
    enableFriends: true
  };
});
