'use strict';
angular.module('app').controller('taskCtrl',['$scope',function($scope){
         var vli = $scope.vli = {};
         vli.activeTab=1;
         $scope.hi=1;
}]);
