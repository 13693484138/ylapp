'use strict';
angular.module('app').directive('homeList',[function(){
  return{
    restrict:'A',
    replace:'=',
    templateUrl:'view/template/homelist.html'
  }
}])
