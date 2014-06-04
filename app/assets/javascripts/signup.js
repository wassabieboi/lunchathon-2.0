// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

angular
  .module('SignupModule', [])
  .controller('ListAllController', function ($scope, $http) {
    $scope.mode = 'all';

    $scope.listRestaurants = function() {
      $scope.mode = 'all';
      $http({
        method: 'GET',
        url: '/restaurants'
      }).success(function (data) {
        $scope.restaurants = data;
      })
    }

    $scope.displayRestaurant = function(id) {
      $scope.mode = 'view';
      $http({
        method: 'GET',
        url: '/restaurant',
        data: {id: id}
      }).success(function (data) {
        $scope.restaurant = data;
      })
    }

    $scope.listRestaurants();


  })