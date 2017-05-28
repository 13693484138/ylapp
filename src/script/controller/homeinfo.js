'use strict';
angular.module('app').directive('homeInfo',[function(){
  return{
    restrict:'A',
    replace:'=',
    templateUrl:'view/template/homeinfo.html'
  }
}])
