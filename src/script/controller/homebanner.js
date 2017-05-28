'use strict';
angular.module('app').directive('homeBanner',[function(){
  return{
    restrict:'A',
    replace:true,
    templateUrl:'view/template/homebanner.html',
    link:function(){
      var gallery = mui('.mui-slider');
     gallery.slider({
     interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
     });
    }
  }
}])
