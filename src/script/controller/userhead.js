'use strict';
angular.module('app').directive('userHeadr',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/userhead.html',
  }
}]);
