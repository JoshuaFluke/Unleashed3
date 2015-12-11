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

.controller('macrosCtrl', function($scope){


  $scope.calculate = function(){

    if (!$scope.weight){
       return $scope.input = true;
    }
    else {
      $scope.input = false;
    }

    var protein = $scope.weight * .95;
    var carbs = protein * .4;
    var fats = protein * .4;

    $scope.presults = Math.round(protein);

    $scope.cresults = Math.round(carbs);

    $scope.fresults = Math.round(fats);

  }


})
