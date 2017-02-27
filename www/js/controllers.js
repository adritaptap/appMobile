angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, getHttpService, $state) {

  getHttpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log($scope.users);
  });

    $scope.login = function(){
      $state.go('tab.dash');
    };
})

.controller('DashCtrl', function($scope, getHttpService, NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
  });

  getHttpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log(response.users);
  });
})


.controller('UsersCtrl', function($scope, getHttpService) {

  getHttpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log(response.users);
  });

})

.controller('UserDetailCtrl', function($scope, $http, $stateParams, getHttpService, NgMap) {

 NgMap.getMap().then(function(map) {
  console.log(map.getCenter());
  console.log('markers', map.markers);
  console.log('shapes', map.shapes);
  });

  var users = getHttpService.asyncGet().then(function (response) {
  var users = response.users;

    for (var i = 0; i < users.length; i++) {
      if (users[i].idUser == parseInt($stateParams.idUser)) {
        $scope.user = users[i];
      }
    }
    console.log($scope.user);
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('EditCtrl', function($scope) {
  //
})
