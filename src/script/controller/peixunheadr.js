'use strict';
angular.module('app').directive('peixunHeadr',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/peixunheadr.html',
  };
}]);
