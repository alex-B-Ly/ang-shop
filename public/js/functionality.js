// ANGULAR CODE

var ngApp = angular.module('store', []);

ngApp.controller('shopController', function($scope, $http){
  var shop = this;

  $scope.login = function(){
    console.log('login works');
    this.loggedIn = true;
  }

  $scope.register = function(){
    console.log(shop.regUsername);
    console.log(shop.regPassword);

    $http({
      method: 'POST',
      url: '/register',
      data: {username: shop.regUsername, password: shop.regPassword}
    }).then(function(result){
      console.log('this is running');

    });

    this.registered = true;
  }
});