'use strict';

angular.module('workout')

.config(function($stateProvider) {
  $stateProvider
    .state('go', {
      url: '/go',
      templateUrl: 'routes/go/go.html'
    })
})

.controller('GoCtrl', function() {

});