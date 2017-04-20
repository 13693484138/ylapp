'use strict';
angular.module('app').directive('detList',[function(){
	return {
	    restrict:'A',
	    replace:true,
	    templateUrl:'view/template/detlist.html'
  };
}]);
