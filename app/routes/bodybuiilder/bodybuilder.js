'use strict';

angular.module('workout')

.config(function($stateProvider) {
  $stateProvider
    .state('bodybuilder', {
      url: '/bodybuilder',
      templateUrl: 'routes/bodybuilder/agile.html'
    })
})

.controller('bbCtrl', function() {

});