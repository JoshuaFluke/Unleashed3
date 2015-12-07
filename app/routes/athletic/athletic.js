'use strict';

angular.module('workout')

  .config(function($stateProvider) {
    $stateProvider
      .state('athletic', {
        url: '/athletic',
        templateUrl: 'routes/athletic/athletic.html'
      })
  })

  .controller('athleticCtrl', function() {

  });