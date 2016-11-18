angular.module('routeApp')
        .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController as home'
          }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController as login'
          }).when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminController as admin'
          }).when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ResultsController as results'
          }).when('/choice', {
            templateUrl: 'views/choice.html',
            controller: 'ChoiceController as choice'
          }).when('/report', {
            templateUrl: 'views/report.html',
            controller: 'ReportController as report'
          }).when('/chosen-food', {
            templateUrl: 'views/chosen-food.html',
            controller: 'FoodController as food'
          }).otherwise({
              redirectTo: '/home',
          });

          $locationProvider.html5Mode(true);
        }); // end routeApp
