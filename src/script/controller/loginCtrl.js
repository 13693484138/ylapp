'use strict';
angular.module('app').controller('loginCtrl',['$scope',function($scope){

  $scope.zhangclick = function (isActive) {
        $scope.active=isActive;
        $scope.active1=!isActive
        };
  $scope.zhangclick1=function(isActive){
        $scope.active1=isActive
        $scope.active=!isActive;
  }
}]);
