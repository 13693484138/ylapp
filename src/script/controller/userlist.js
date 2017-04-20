'use strict';
angular.module('app').directive('userList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/userlist.html',
    link:function($scope){
      var vm = $scope.vm = {};
      vm.value = 50;
      vm.style = 'progress-bar-info';
      vm.showLabel = true;
    }
  }
}]);
