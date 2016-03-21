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
      console.log(result.data);
      $scope.username = result.data.username;
      // TODO Create all the other keys in the users model and get the relevant ones in here for use
    });

    this.loggedIn = true;
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