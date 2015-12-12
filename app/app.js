'use strict';

// Declare app level module which depends on views, and components
angular.module('workout', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.router',
  'firebase'
]).

config(function ($urlRouterProvider) {
  //whats going in the url and an object with properties, of url, templateurl and controller
   $urlRouterProvider
    .otherwise('/')
}).

constant('fb', {
  url: 'https://liftfriendly.firebaseio.com/'
}).

factory('fbRef', function (fb) {
  return new Firebase(fb.url);
}).

service('fbService', function ($firebaseArray, $firebaseObject, fbRef) {
  this.getAllComments = function () {
    var ref = fbRef.child('comments');
    return $firebaseArray(ref);
  }

})
