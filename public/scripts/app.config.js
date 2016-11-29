angular.module('routeApp')
        .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController as home'
          }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController as login'
          }).when('/locations', {
            templateUrl: 'views/locations.html',
            controller: 'LocationController as location'
          }).when('/user-landing', {
            templateUrl: 'views/user-landing.html',
            //controller: ''
          }).when('/chosen-food', {
            templateUrl: 'views/chosen-food.html',
            //controller: ''
          }).when('/chosen-food-hotdog', {
            templateUrl: 'views/chosen-food-hotdog.html',
            //controller: ''
          }).when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController as admin'
          }).when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsController as results'
          }).when('/categories', {
            templateUrl: 'views/categories.html',
            controller: 'CategoriesController as cat'
          }).when('/report', {
            templateUrl: 'views/report.html',
            controller: 'ReportController as report'
          }).when('/chosen-food', {
            templateUrl: 'views/chosen-food.html',
            controller: 'FoodController as food'
          }).when('/user-feedback', {
            templateUrl: 'views/user-feedback.html',
            controller: 'ReportController as report'
          }).otherwise({
              redirectTo: '/home',
          });

          $locationProvider.html5Mode(true);
        }); // end routeApp
