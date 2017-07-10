'use strict';
angular.module('app').directive('detTion',[function(){
	return {
	    restrict:'A',
	    replace:true,
	    templateUrl:'view/template/dettion.html',
			link:function($scope){
         $scope.per=0;
			}
  };
}]);
