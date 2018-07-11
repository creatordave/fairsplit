angular.module('fairsplit',['digit-field'])
  .controller('mainCtrl', function($scope){
    'use strict';
      var calculate = function() {
        if (angular.isDefined($scope.total) && angular.isDefined($scope.mine) && angular.isDefined($scope.theirs)){
          ///if (!$scope.$$phase){
            $scope.oweMe = (($scope.total - ($scope.theirs + $scope.mine)) / 2) + $scope.theirs;
          //}
        }
      };

      // $scope.total;
      // $scope.mine;
      // $scope.theirs;
      $scope.oweMe = 0;

      $scope.$watch('total', calculate);
      $scope.$watch('mine', calculate);
      $scope.$watch('theirs', calculate);

      $scope.iOS = function() {

        var iDevices = [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod'
        ];

        if (!!navigator.platform) {
          while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) { return true; }
          }
        }

        return false;
      }

  });
