'use strict';

angular.module('workout')

.config(function($stateProvider) {
  $stateProvider
    .state('agile', {
      url: '/agile',
      templateUrl: 'routes/agile/agile.html'
    })
})

.controller('agileCtrl', function() {

});