angular.module('routeApp')
.directive('foodAnimate', ['$document', function ($document) {
  return {
    link: function (scope, element, attr) {

      element.on('animationend', function () {
        console.log('removing class');
        element.removeClass('shake');
      });
    },
  };
},
]);
