'use strict';
angular.module('app').directive('userList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/userlist.html',
  }
}]);
