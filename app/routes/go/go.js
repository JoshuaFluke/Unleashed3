'use strict';

angular.module('workout')

  .config(function ($stateProvider) {
    $stateProvider
      .state('go', {
        url: '/go',
        templateUrl: 'routes/go/go.html',
        controller: 'GoCtrl'
      })
  })

  .controller('GoCtrl', function ($scope) {
    
    $scope.content = false;
    $scope.content2 = false;
    $scope.content3 = false;

    $scope.showcontent = function (content) {
      $scope.content = content === 'Bodybuilder'
      $scope.content2 = content === 'Athletic'
      $scope.content3 = content === 'Agile'

    }

    // $('.myButton').on('click', function (event) {
    //   $('#content').toggle('display');
    //   $('#content2').css('display', 'none')
    //   $('#content3').css('display', 'none')
    // });


    // $('.myButton2').on('click', function (event) {
    //   $('#content2').toggle('display')
    //   $('#content3').css('display', 'none')
    //   $('#content').css('display', 'none')
    // });

    // $('.myButton3').on('click', function (event) {
    //   $('#content3').toggle('display')
    //   $('#content2').css('display', 'none')
    //   $('#content').css('display', 'none')
    // });

  })


