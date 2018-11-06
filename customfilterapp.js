(function() {
  'use strict';
  angular.module('customFilterApp', [])

    .controller('MyCustomFilterController', MyCustomFilterController)
    .filter('lovelier', LovelyFilter)
    .filter('replacer', ReplacerFilter);

  MyCustomFilterController.$inject = ['$scope', '$filter', 'lovelierFilter'];


  function MyCustomFilterController($scope, $filter, lovelierFilter) {
    $scope.name = "Ersen";
    $scope.chosenImage = "android";
    $scope.cost = .45;
    $scope.sayHello = function() {
      var msg = "Hello my Team!";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.sayLovelyHello = function() {
      var msg = "Hello my Team!";
      msg = lovelierFilter(msg);
      return msg;
    };

    $scope.changePicture = function() {
      $scope.chosenImage = "starkids";
    };
  }

  function LovelyFilter() {
    return function(input) {
      input = input || "";
      input = input.replace("my", "lovely");
      return input;
    };
  }

  function ReplacerFilter() {
    return function (input, source, target) {
      input = input || "";
      input = input.replace(source, target);
      return input;
    }
  }
})();
