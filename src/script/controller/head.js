'use strict';
angular.module('app').directive('appHead',[function(){
	return {
	    restrict:'A',
	    replace:true,
	    templateUrl:'view/template/head.html',
			scope:{
		text:'='
	},
	link:function(scope){
		scope.back=function(){
       window.history.back();
		}
	}
  };
}]);
