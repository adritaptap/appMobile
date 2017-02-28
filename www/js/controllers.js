angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, getHttpService, postHttpService, $state) {

  getHttpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log($scope.users);
  });

//  $scope.login

})

.controller('DashCtrl', function($scope, getHttpService, $cordovaGeolocation, NgMap) {

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.lat  = position.coords.latitude;
         $scope.long = position.coords.longitude;
      }, function(err) {
        // error
      });



  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
  });

  getHttpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log(response.users);
  });

  $scope.user = {};

  $scope.log = function (user) {
    console.log($scope.user.name);
  }


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

.controller('AccountCtrl', function($scope, getHttpService) {
  getHttpService.asyncGet().then(function (response) {
     $scope.users = response.users;
  });


  $scope.settings = {
    enableFriends: true
  };

});

// .controller('EditCtrl', function($scope) {
//   //
// });
