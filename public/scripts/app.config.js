angular.module('routeApp')
        .config(function($routeProvider, $locationProvider) {
          $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
          }).when('/login', {
            templateUrl: 'views/login.html',
          }).otherwise({
              redirectTo: '/home',
          });

          $locationProvider.html5mode(true);
        }); // end routeApp
