angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, httpService, NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);


  });
  httpService.asyncGet().then(function (response) {
    $scope.users = response.users;

  });
})


.controller('UsersCtrl', ['$scope', 'httpService', function($scope, httpService) {


  httpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log(response.users);
  });



}])

.controller('UserDetailCtrl', ['$scope', '$http', '$stateParams', 'httpService', 'NgMap', function($scope, $http, $stateParams, httpService, NgMap) {

 NgMap.getMap().then(function(map) {
  console.log(map.getCenter());
  console.log('markers', map.markers);
  console.log('shapes', map.shapes);
});


 var users = httpService.asyncGet().then(function (response) {
  var users = response.users;



  for (var i = 0; i < users.length; i++) {
    if (users[i].idUser == parseInt($stateParams.userId)) {

     $scope.user = users[i];



   }
 }

}); 

}])

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope, $http) {

    $scope.username;
    $scope.password;
    
    post(url, data)

});