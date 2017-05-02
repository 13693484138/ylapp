'use strict';
angular.module('app').directive('meList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/meList.html',
  };
}]);
