/**
 * Created by Josh on 12/8/2015.
 */
angular.module('workout')
  .config(function($stateProvider) {
    $stateProvider
      .state('macros', {
        url: '/macros',
        templateUrl: 'routes/Macros/Macros.html',
        controller: 'macrosCtrl'
      })
  })

.controller('macrosCtrl', function(){




})


.directive('macros', function(){

  return {
    restrict: 'EAC',
    templateUrl: macros.html



  }





})