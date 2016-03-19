var ngApp = angular.module('store', []);

ngApp.controller('featuredItems', function($scope){
  $scope.featuredStuff = ['socks', 'more socks', 'even more socks', 'mittens'];

});