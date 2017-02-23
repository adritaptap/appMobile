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

.controller('geoCtrl',function($scope, HttpRequest){

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
    $scope.map = {
      center: [45.166672,5.71667]
    }
  });
})

.controller('loginCtrl',function($scope, HttpRequest, $state, $ionicPopup){
  $scope.user = {};

  $scope.login = function() {
    HttpRequest.post($scope.user , function(data){
      if(data.statePwdApi == 'ok'){
        console.log(data);
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
