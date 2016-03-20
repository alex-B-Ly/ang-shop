var ngApp = angular.module('store', []);

ngApp.controller('shop', function($scope){

  $scope.login = function(){
    console.log('login works');
    $scope.loggedIn = true;
  }

});