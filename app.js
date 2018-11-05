(function() {
  'use strict';
  angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope) {
      $scope.name = "Ersen";
      $scope.sayHello = function() {
        return "Hello Team!";
      }
    });

})();
