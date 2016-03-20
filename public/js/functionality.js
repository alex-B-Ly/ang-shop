// ANGULAR CODE

var ngApp = angular.module('store', []);

ngApp.controller('shop', function($scope){

  $scope.login = function(){
    console.log('login works');
    this.loggedIn = true;
  }

  $scope.register = function(){
    console.log('REGISTERED');
    this.registered = true;
  }
});