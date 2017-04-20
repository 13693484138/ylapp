'use strict';
angular.module('app').directive('appBar',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/appbar.html',
  }
}]);
