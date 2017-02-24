angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, httpService, NgMap, $cookies, $state, $cordovaGeolocation) {
  if($cookies.get('cookieSession')) {

    $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      $scope.lat  = position.coords.latitude;
      $scope.long = position.coords.longitude;

      NgMap.getMap();
      

      httpService.asyncGet().then(function (response) {
        $scope.users = response.users;

        var compteUser = [];
        for (var i = 0; i < $scope.users.length; i++) {
          compteUser.push(i);      
        }
        $scope.compteur = compteUser;

        $scope.getNumber = function() {
          console.log('hello');
        }


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
    console.log(response.users);
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

.controller('SettingCtrl', function($scope, $http, $location, $http, httpService, $cookies, $state) {
  // settinf logout at off
  $scope.settings = {
    enableFriends: false
  };
  //display prfile connected
  var users = httpService.asyncGet().then(function (response) {
    var users = response.users;

    for (var i = 0; i < users.length; i++) {
      if (users[i].idUser == $cookies.getObject('cookieSession').idUserApi) {

       $scope.user = users[i];
       console.log($scope.user);
     }
   }

 });

  console.log('rien');
  $scope.toogle = function() {
    console.log('click');
    console.log($scope.settings.enableFriends);
    if ($scope.settings.enableFriends == true) {
      $cookies.remove('cookieSession');
      $state.go('login');
    }
  }
  //profil update
  $scope.update = function() {
    var url = 'http://carbillet.net/api-digitalGrenoble/users/'; 

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
      "idUser": $cookies.getObject('cookieSession').idUserApi,
      "adress": $scope.adress,
      "age": $scope.age,
      "phone": $scope.phone
    };


    console.log({json: data});

    $http.put(url, {json: data}).then(function(response) {
      console.log(response.data);
      $scope.user.age = $scope.age;
      $scope.user.adress = $scope.adress;
      $scope.user.phone = $scope.phone;
      
    });
  }

})


.controller('LoginCtrl', function($scope, $http, $ionicPopup, $state, $cookies) {

  console.log('je suis dans le controller');
//verify if cokkie exist

if(!$cookies.get('cookieSession')) {
  ('pas de cookies');
  var data = {};

  $scope.submit = function() {
    var url = 'http://carbillet.net/api-digitalGrenoble/credentials/'; 

    console.log($scope.username);

    data = 
    { 'username': $scope.username, 
    'password': $scope.password
  };


  console.log({json: data});

  $http.post(url, {json: data}).then(function(response) {
    console.log(response.data);

    if (response.data.statePwdApi != 'ok'){
      var alertPopup = $ionicPopup.alert({
       title: 'Attention',
       template: response.data.errorApi

     });
    }

    else {
      var now = new Date(),
    // this will set the expiration to 12 months
    exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());
    $cookies.putObject('cookieSession', response.data, {'expires': exp});
    $state.go('tab.dash');
  }
});
}

}
else {
  console.log('cookie donc jy vais');
  $state.go('tab.dash');
}
});