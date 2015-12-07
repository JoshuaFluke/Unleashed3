'use strict';

angular.module('workout')

.config(function($stateProvider) {
  $stateProvider
    .state('go', {
      url: '/go',
      templateUrl: 'routes/go/agile.html'
    })
})

.controller('GoCtrl', function() {

});