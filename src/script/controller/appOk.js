'use strict';
angular.module('app').directive('appOk',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/appOk.html'
  }
}]);
