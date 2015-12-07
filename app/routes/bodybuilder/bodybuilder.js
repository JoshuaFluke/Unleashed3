'use strict';

angular.module('workout')

.config(function($stateProvider) {
  $stateProvider
    .state('bodybuilder', {
      url: '/bodybuilder',
      templateUrl: 'routes/bodybuilder/bodybuilder.html'
    })
})

.controller('bbCtrl', function() {

})

.controller('DropdownCtrl', function ($scope, fbService) {

  $scope.status = {
    isopen: false
  };

  $scope.comments = fbService.getAllComments()  //firebase object

  $scope.username = fbService.getNames()

  $scope.addComment = function () {
    console.log($scope.commentText)
    $scope.comments.$add($scope.commentText)

    $scope.username.add($scope.commentName)
  }
})

.controller('bmiCtrl', function ($scope) {
  $scope.hello = "enter a name"
  $scope.x = true;

  $scope.change = function () {
    debugger
    if($scope.random == '' && $scope.whatever.$dirty) {

      $scope.hello = "enter a name"
      $scope.showbtn = false

    }
    else {

      $scope.hello = 'hello ' + $scope.random
      $scope.showbtn = true
    }
  }


  $scope.calculate = function (){
    var weight = $scope.weight * .45
    var height = $scope.height * .025

    $scope.results = weight /  Math.pow(height, 2)
  }
});