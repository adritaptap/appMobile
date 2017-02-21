angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsListCtrl', function($scope, Chats,$http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //$scope.results = Chats.all();

  $http({
    method: 'GET',
    url: 'http://carbillet.net/api-digitalGrenoble/users/'
    }).then(
      function successCallback(response) {
        console.log('data success');
        results = response.data['users'];
        $scope.results = results;
        console.log(results);
        },
      function errorCallback(response) {
        console.log('data error');
      })


  $scope.remove = function(chat) {
      Chats.remove(chat);
    };
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
