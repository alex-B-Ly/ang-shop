// ANGULAR CODE

var ngApp = angular.module('store', []);

ngApp.controller('shopController', function($scope, $http){
  var shop = this;

  $scope.login = function(){
    
    $http({
      method: 'POST',
      url: '/login',
      data: {username: shop.loginUsername, password: shop.loginPassword}
    }).then(function(result){

      if(result.data[0]){
        console.log('getting data back');
        this.loggedIn = true;
      }else{
        console.log('fail');
      }

      // $scope.username = result.data.username;
      // TODO Create all the other keys in the users model and get the relevant ones in here for use
    });
  }

  $scope.register = function(){

    $http({
      method: 'POST',
      url: '/register',
      data: {username: shop.regUsername, password: shop.regPassword}
    }).then(function(result){
      $scope.username = result.data.username;
      $scope.registered = true;
    });
  }

});