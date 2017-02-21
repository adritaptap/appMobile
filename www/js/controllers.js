angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsListCtrl', function($scope, Chats, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
  $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  $scope.results = "";
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
