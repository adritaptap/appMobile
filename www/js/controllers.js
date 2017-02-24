angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, getHttpService, NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
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

.controller('LoginCtrl', function($scope, $http, $ionicPopup, $state) {

  var data = {};

  $scope.submit = function() {
    var url = 'http://carbillet.net/api-digitalGrenoble/credentials/';

    console.log($scope.username);

    var data =
    {
      'username': $scope.username,
      'password': $scope.password
    };

    console.log({json: data});

    $http.post(url, {json: data}).then(function(response) {
      console.log(response.data);
      if (response.data.statePwdApi == 'ok'){

        $state.go('tab.dash');

      } else {
        var alertPopup = $ionicPopup.alert({title: 'Attention', template: response.data.errorApi});
      }
    });
  };
});
