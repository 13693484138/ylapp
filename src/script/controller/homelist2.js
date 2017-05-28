'use strict';
angular.module('app').directive('homeList2',[function(){
  return{
    restrict:'A',
    replace:'=',
    templateUrl:'view/template/homelist2.html'
  }
}])
