'use strict';
angular.module('app').directive('mehead',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/meHead.html',
  };
}]);
