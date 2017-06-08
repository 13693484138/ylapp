'use strict';
angular.module('app').controller('processCtrl',['$state','$scope',function($state,$scope){
  var vli = $scope.vli = {};
  vli.activeTab=1;
}]);
