angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, httpService, NgMap, $state, $cordovaGeolocation) {
  if(localStorage.getItem('storageSession')) {
    console.log(localStorage.getItem('storageSession'));
    $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;

      NgMap.getMap();
      
      httpService.asyncGet().then(function (response) {
        $scope.users = response.users;

        var data = 
    {
      "idUser": localStorage.getItem('storageSession'),
      "adress": response.users.adress,
      "age": response.users.age,
      "phone": response.users.phone
    };

        httpService.asyncPost(data).then(function () {
          console.log('localisation updated');
        });



      });
    });
  }
  else {

    $state.go('login');
  }
})

.controller('UsersCtrl', ['$scope', 'httpService', function($scope, httpService) {


  httpService.asyncGet().then(function (response) {
    $scope.users = response.users;
  });
}])

.controller('UserDetailCtrl', ['$scope', '$http', '$stateParams', 'httpService', 'NgMap', function($scope, $http, $stateParams, httpService, NgMap) {

 NgMap.getMap();


 var users = httpService.asyncGet().then(function (response) {
  var users = response.users;

  for (var i = 0; i < users.length; i++) {
    if (users[i].idUser == parseInt($stateParams.userId)) {

     $scope.user = users[i];
   }
 }
}); 
}])

.controller('SettingCtrl', function($scope, $http, httpService, $state) {

  // settinf logout at off
  $scope.settings = {
    enableFriends: false
  };

  //display prfile connected
  var users = httpService.asyncGet().then(function (response) {
    var users = response.users;

    for (var i = 0; i < users.length; i++) {
      if (users[i].idUser == localStorage.getItem('storageSession')) {

       $scope.user = users[i];
     }
   }
 });

  
  $scope.toogle = function() {

    if ($scope.settings.enableFriends == true) {
      localStorage.removeItem('storageSession');
      $state.go('login');
    }
  }

  //profil update
  $scope.update = function() {

    if(!$scope.adress){
      $scope.adress = $scope.user.adress;
    }
    if(!$scope.age){
      $scope.age = $scope.user.age;
    }
    if(!$scope.phone){
      $scope.phone = $scope.user.phone;
    }

    var data = 
    {
      "idUser": localStorage.getItem('storageSession'),
      "adress": $scope.adress,
      "age": $scope.age,
      "phone": $scope.phone
    };

    httpService.asyncPut(data).then(function(response) {
      console.log(response);
      $scope.user.age = $scope.age;
      $scope.user.adress = $scope.adress;
      $scope.user.phone = $scope.phone;
      
    });
  }
})


.controller('LoginCtrl', function($scope, $http, httpService, $ionicPopup, $state) {

//verify if cokkie exist
console.log(localStorage.getItem('storageSession'));
if(!localStorage.getItem('storageSession')) {

  console.log('pas de cookies');
  var data = {};

  $scope.submit = function() {

    data = 
    { 'username': $scope.username, 
    'password': $scope.password
  };

  httpService.asyncPost(data).then(function (response) {

    if (response.statePwdApi != 'ok'){
      var alertPopup = $ionicPopup.alert({
       title: 'Attention',
       template: response.errorApi
     });
    }

    else {
      console.log('doit redirection');
      var keyValue = response.idUserApi;
    //   var now = new Date();
    // // this will set the expiration to 12 months
    // exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
    localStorage.setItem('storageSession', keyValue);

    $state.go('tab.dash');
  }
});
}
}
else {
  $state.go('tab.dash');
}
});