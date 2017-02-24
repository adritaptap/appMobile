angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsListCtrl', function($scope, HttpRequest) {

  HttpRequest.get(function(data){
    $scope.results = data;
  });

  $scope.doRefresh = function(){
    HttpRequest.get(function(data){
      $scope.results = data;
      $scope.$broadcast('scroll.refreshComplete');
    });
  }
})

.controller('FriendDetailCtrl', function($scope, HttpRequest, $stateParams) {
  HttpRequest.getOne($stateParams.friendId, function(data){
    $scope.result =  data;
    console.log(data.position.lat);

    $scope.map = {
        center: [(data.position.lat), (data.position.lng)]
      }
    $scope.marker = {
        position: [(data.position.lat), (data.position.lng)]
      }
    });
})

.controller('geoCtrl',function($scope, HttpRequest,$cordovaGeolocation){
  HttpRequest.get(function(data){
    var position = [];

    angular.forEach(data, function(value, key) {
      temp = null;
      if (value.position!=null){
        temp = {
          position : [value.position.lat, value.position.lng]
        };
        this.push(temp);
      }
    }, position);

    $scope.positions = position;

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        $scope.map = {
          center: [lat,long]
        }
      }, function(err) {
        // error
      });
  });
})

.controller('loginCtrl',function($scope, HttpRequest, $state, $ionicPopup){
  $scope.user = {};
  var login = localStorage.getItem("login");
  console.log(login);
  if( login == 'ok'){
    $state.go('tab.dashboard');
  }
  $scope.login = function() {
    HttpRequest.post($scope.user , function(data){
      if(data.statePwdApi == 'ok'){
        localStorage.setItem("login",data.statePwdApi);
        console.log(data.statePwdApi);
        $state.go('tab.dashboard');

      }else{
        console.log('erreur');
        $ionicPopup.alert({
          title: 'LOGIN',
          template: 'Erreur de login !'
          });
      }
    })
  };
})

.controller('ChatCtrl', function($scope, HttpRequest) {
})


.controller('AccountCtrl', function($scope, HttpRequest, $state) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function(){
    if($scope.settings.enableFriends == false){
      localStorage.removeItem("login");
      $state.go('login');
    }
  };

  HttpRequest.getOne(30, function(data){
    $scope.result =  data;
  });

  $scope.update = function() {
    testJson =  {"idUser": 30,
                "adress": $scope.result.adress,
                "age": $scope.result.age,
                "phone": $scope.result.phone
              };
    HttpRequest.put(testJson , function(data){
      $state.go('tab.friendsList');
    });

  }

});
