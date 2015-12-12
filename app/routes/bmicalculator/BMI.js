angular.module('workout')
.config(function($stateProvider) {
  $stateProvider
    .state('bodymass', {
      url: '/bodymass',
      templateUrl: 'routes/bmicalculator/BMI.html',
      controller: 'bmiCtrl'
    })
})

  .controller('bmiCtrl', function ($scope) {


    $scope.calculate = function () {
      var weight = $scope.weight * .45;
      var height = $scope.height * .025;

      $scope.results = weight / Math.pow(height, 2)
    }
    })
