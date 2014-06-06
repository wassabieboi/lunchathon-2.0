// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

angular
  .module('SignupModule', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/Restaurants', {
          templateUrl: 'view_all.html',
          controller: 'ViewAllController'
        })
        .when('/Restaurant/:restaurantId', {
          templateUrl: 'view.html',
          controller: 'ViewController'
        })
		    .otherwise({
    	    redirectTo: '/Restaurants'
      });
    }])
  .controller('ViewAllController', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/restaurants'
    }).success(function (data) {
      $scope.restaurants = data;
    });
  })
  .controller('ViewController', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/restaurant',
      data: {id: id}
    }).success(function (data) {
      $scope.restaurant = data;
    });
  });