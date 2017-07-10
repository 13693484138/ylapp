'use strict';
angular.module('app').directive('phList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/phList.html',
  };
}]);
