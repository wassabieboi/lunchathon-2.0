// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

angular
  .module('SignupModule', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/view_all.html',
          controller: 'ViewAllController'
        })
        .when('/Restaurant/:restaurantId', {
          templateUrl: '/view.html',
          controller: 'ViewController'
        })
        .otherwise({ redirect: '/' });

        $locationProvider.html5Mode(true);
    })
  .controller('MainController', function($scope, $route, $routeParams, $location) {
    console.log("MainController");
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.test = "foo";
  })  
  .controller('ViewAllController', function ($scope, $routeParams, $http) {
    console.log("ViewAllController");
     $scope.params = $routeParams;
  
    $http({
      method: 'GET',
      url: '/restaurants'
    }).success(function (data) {
      $scope.restaurants = data;
    });
  })
  .controller('ViewController', function ($scope, $routeParams, $http) {
    console.log("ViewController");
     $scope.params = $routeParams;
  
    $http({
      method: 'GET',
      url: '/restaurant',
      data: {id: id}
    }).success(function (data) {
      $scope.restaurant = data;
    });
  })
	;