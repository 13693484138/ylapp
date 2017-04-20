'use strict';
angular.module('app').directive('userList1',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/userlist1.html',
  }
}]);
