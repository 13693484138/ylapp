'use strict';
angular.module('app').controller('menfpCtrl',['$scope',function($scope){
        var men = $scope.men = {};
        men.omsk=false;
        men.pop=false;
        men.list=1;
        $scope.back=function(){
           window.history.back();
        }
}]);
