angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


.controller('ChatsCtrl', ['$scope','$http', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $http.get('http://carbillet.net/api-digitalGrenoble/users/')
  .then(function successCallback(response) {

    $scope.users = response.data.users;
    console.log(response);  


  }, function errorCallback(response) {
    console.log("error");
  });

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
