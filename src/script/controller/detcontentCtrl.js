'use strict';
angular.module('app').controller('detcontentCtrl',['$scope',function($scope){
  var lio = $scope.lio = {};
  lio.activeTab=1;
  var bot = $scope.bot = {};
  $scope.bot=false;
}]);
