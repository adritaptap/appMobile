angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsListCtrl', function($scope, HttpRequest) {

  HttpRequest.get(function(data){
    $scope.results = data;
  });
})

.controller('FriendDetailCtrl', function($scope, HttpRequest, $stateParams) {
  HttpRequest.getOne($stateParams.friendId, function(data){
    $scope.result =  data;
  });
})

.controller('loginCtrl',function($scope, HttpRequest, $state, $ionicPopup){
  $scope.user = {};

  $scope.login = function() {
    HttpRequest.post($scope.user , function(data){
      if(data.statePwdApi == 'ok'){
        console.log('ok');
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
