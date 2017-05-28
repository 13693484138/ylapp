
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
		controller: "taskCtrl"
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
  });
  $urlRouterProvider.otherwise('home');
}])
