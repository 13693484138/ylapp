'use strict';
angular.module('app').directive('userList2',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/userlist2.html',
  }
}]);
