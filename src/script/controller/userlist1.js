'use strict';
angular.module('app').directive('userList1',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/userlist1.html',
    link:function($scope){
      var vm = $scope.vm = {};
      vm.value = 50;
      vm.style = 'progress-bar-info';
      vm.showLabel = true;
    }
  }
}]);
