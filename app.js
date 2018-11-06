(function() {
  'use strict';
  angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope, $filter, lovelierFilter) {
      $scope.name = "Ersen";
      $scope.chosenImage = "android";
      $scope.cost = .45;
      $scope.sayHello = function() {
        var msg = "Hello Team!";
        var output = $filter('uppercase')(msg);
        return output;
      };

      $scope.sayLovelyHello = function() {
        var msg = "Hello my Team!";
        msg = lovelierFilter(msg);
        return msg;
      };

      $scope.changePicture = function () {
        $scope.chosenImage = "starkids";
      };
    }).filter('lovelier', LovelyFilter);

function LovelyFilter () {
  return function (input) {
    input = input || "";
    input = input.replace("my", "lovely");
    return input;
  };
}
})();
