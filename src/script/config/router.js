
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
		url: "/details",
		templateUrl: "view/details.html",
		controller: "detailsCtrl"
	}).state('detcontent', {
		url: "/details",
		templateUrl: "view/detcontent.html",
		controller: "detcontentCtrl"
	});
  $urlRouterProvider.otherwise('login');
}])
