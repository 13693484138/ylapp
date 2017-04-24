'use strict';
angular.module('app').controller('detcontentCtrl',['$state','$scope',function($state,$scope){

  var lio = $scope.lio = {};
  lio.activeTab=1;
  if($state.params.id==2){
    lio.shu=true;
  }
  else if($state.params.id==1){
    lio.shu=false;
  }
  var bot = $scope.bot = {};
  $scope.bot=false;
}]);
