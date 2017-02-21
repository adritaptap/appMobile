angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, NgMap, httpService) {

  httpService.asyncGet().then(function (response) {
    $scope.users = response.users;


    NgMap.getMap().then(function(map) {
    // console.log(map.getCenter());
    // console.log('markers', map.markers);
    // console.log('shapes', map.shapes);
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBMrTz3eJddGzQo3mq1eYzrf91e7AyuX-I";
  });

  });
})


.controller('UsersCtrl', ['$scope', 'httpService', function($scope, httpService) {


  httpService.asyncGet().then(function (response) {
    $scope.users = response.users;
    console.log(response.users);
  });



}])

.controller('UserDetailCtrl', ['$scope', '$http', '$stateParams', 'httpService', function($scope, $http, $stateParams, httpService) {


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

.controller('LoginCtrl', function($scope) {
  
});