angular.module('routeApp')
        .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
          }).when('/login', {
            templateUrl: 'views/login.html',
          }).when('/admin', {
            templateUrl: 'views/admin.html'
          }).otherwise({
              redirectTo: '/home',
          });

          $locationProvider.html5Mode(true);
        }); // end routeApp
