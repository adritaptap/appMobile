angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('FriendsListCtrl', function($scope, HttpRequest) {

  HttpRequest.get(function(data){
    $scope.results = data;
  })

  // $scope.remove = function(chat) {
  //     Chats.remove(chat);
  //   };

  // $http({
  //   method: 'GET',
  //   url: 'http://carbillet.net/api-digitalGrenoble/users/'
  //   }).then(
  //     function successCallback(response) {
  //       console.log('data success');
  //       results = response.data['users'];
  //       $scope.results = results;
  //       console.log(results);
  //       },
  //     function errorCallback(response) {
  //       console.log('data error');
  //     })


})

.controller('FriendDetailCtrl', function($scope, HttpRequest, $stateParams) {
  HttpRequest.get(function(data){
    for(var i = 0 ; i < data.length ; i ++){
      console.log($stateParams.friendId);
      if(data[i].idUser == parseInt($stateParams.friendId)){
        $scope.result =  data[i];
      }
    }
  })
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


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
