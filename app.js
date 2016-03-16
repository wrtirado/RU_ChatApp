;(function () {
  'use strict'
  angular.module('chatApp', ['chatBoxControllers', 'ui.router'])
    .config(MainRouter)

  // MainRouter.$.inject = ['$stateProvider', '$urlRouteProvider']

  function MainRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('chat', {
        url: "/",
        templateUrl: "./chatRoom.html",
      })

      .state('user', {
        url: "user",
        templateUrl: "./user.html",
      })

      .state('signUp',{
        url: '/signUp',
        templateUrl: './signup.html'
      })
  }
}())
