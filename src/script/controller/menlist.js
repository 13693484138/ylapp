'use strict';
angular.module('app').directive('menList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/menlist.html',
  };
}]);
