// ANGULAR CODE

var ngApp = angular.module('store', []);

ngApp.controller('shopController', function($scope, $http){
  var shop = this;

  // LOGIN
  $scope.login = function(){
    
    $http({
      method: 'POST',
      url: '/login',
      data: {username: shop.loginUsername, password: shop.loginPassword}
    }).then(function(result){

      if(result.data[0]){
        console.log('getting data back');
        $scope.loggedIn = true;
        $scope.username = result.data[0].username;
        $scope.balance = result.data[0].balance;
      }else{
        $scope.loginFail = true;
      }
      
      // TODO Create all the other keys in the users model and get the relevant ones in here for use
    });
  }

  // REGISTER
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

  // updateBalance
  $scope.updateBalance = function(){

    $http({
      method: 'PUT',
      url: '/update-balance',
      data: {username: $scope.username, balance: shop.balanceUpdater}
    }).then(function(result){
      console.log(result.data.balance);
      $scope.balance = result.data.balance;
    })
  }

  // showMeTheAninals
  $scope.showMeTheAnimals = function(){
    $scope.activeAnimals = true;
  }


});