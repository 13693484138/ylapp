
'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider)
{
  $stateProvider.state('main', {
		url: "/main",
		templateUrl: "view/main.html",
		controller: "mainCtrl"
	}).state('login', {
		url: "/login",
		templateUrl: "view/login.html",
		controller: "loginCtrl"
	}).state('user', {
		url: "/user",
		templateUrl: "view/user.html",
		controller: "userCtrl"
	}).state('task', {
		url: "/task",
		templateUrl: "view/task.html",
		controller: "processCtrl"
	}).state('details', {
		url: "/details/:id",
		templateUrl: "view/details.html",
		controller: "detailsCtrl"
	}).state('detcontent', {
		url: "/detcontent/:id",
		templateUrl: "view/detcontent.html",
		controller: "detcontentCtrl"
	}).state('detsales',{
    url:"/detsales",
    templateUrl:"view/detsales.html",
    controller:"detsalesCtrl"
  }).state('me',{
    url:"/me",
    templateUrl:"view/me.html",
    controller:"meCtrl"
  }).state('mecont',{
    url:"/mecont",
    templateUrl:"view/mecont.html",
    controller:"mecontCtrl"
  }).state('aboutApp',{
    url:"/aboutApp",
    templateUrl:"view/aboutApp.html"
  }).state('home',{
    url:"/home",
    templateUrl:"view/home.html",
    controller: "homeCtrl"
  }).state('process',{
    url:"/process",
    templateUrl:"view/process.html",
    controller: "taskCtrl"
  }).state('category',{
    url:"/category",
    templateUrl:"view/category.html",
    controller:"categoryCtrl"
  }).state('peixun',{
    url:"/peixun",
    templateUrl:"view/peixun.html",
    controller:"peixunCtrl"
  }).state('pxcontent',{
    url:"/pxcontent",
    templateUrl:"view/pxcontent.html",
    controller:"pxcontentCtrl"
  }).state('peiHang',{
    url:"/peiHang",
    templateUrl:"view/peiHang.html",
    controller:"peiHangCtrl"
  }).state('peigr',{
    url:"/peigr",
    templateUrl:"view/peigr.html",
    controller:"peigrCtrl"
  }).state('page',{
    url:"/page",
    templateUrl:"view/page.html",
    controller:"pageCtrl"
  }).state('menfp',{
    url:"/menfp",
    templateUrl:"view/menfp.html",
    controller:"menfpCtrl"
  }).state('menfpct',{
    url:"/menfpct",
    templateUrl:"view/menfpct.html",
    controller:"menfpctCtrl"
  });
  $urlRouterProvider.otherwise('menfp');
}])
