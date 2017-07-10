'use strict';
angular.module('app').directive('peixunList',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/peixunlist.html',
  };
}]);
