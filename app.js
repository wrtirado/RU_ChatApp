;(function () {
  'use strict'
  angular.module('chatApp', ['chatBoxControllers', 'ui.router'])
    .config(myRoutes)

  function myRoutes ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('chat', {url: '/',templateUrl: './chatRoom.html'})
      .state('user', {url: '/user',templateUrl: './user.html'})
      .state('signUp',{url: '/signUp',templateUrl: './signup.html'})
    $urlRouterProvider.otherwise('/')
  }

}())
