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

      if(!$scope.height && !$scope.weight){
        $scope.results = 'Please enter values'
      }
      else if (!$scope.height || !$scope.weight){
        $scope.results = 'Please enter values'
      }

      else{

        var weight = $scope.weight * .45;
        var height = $scope.height * .025;

        $scope.results = Math.floor(weight / Math.pow(height, 2));
      }
    }

    })
