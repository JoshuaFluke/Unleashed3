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

    $scope.username.$add($scope.commentName)
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


  $(":checkbox[name='4[]']").change(function () {
    if ($(":checkbox[name='4[]']:checked").length == 2)
      $(':checkbox:not(:checked)').prop('disabled', true);
    else
      $(':checkbox:not(:checked)').prop('disabled', false);
  })


  $(".go").on('click', function () {

    var arms = $("#arms").is(":checked")
    var chest = $("#chest").is(":checked")
    var legs = $("#legs").is(":checked")
    var shoulders = $("#shoulders").is(":checked")
    var back = $("#back").is(":checked")

    //console.log('wegwegrwe')
    if (arms) {
      $(".arms").toggle('display')
      $("#arms").hide();
      $(".chkdesc").hide();
    }
    if (chest) {
      $(".chest").toggle('display')
      $("#chest").hide();
      $(".chkdesc").hide();
    }
    if (legs) {
      $(".legs").toggle('display')
      $("#legs").hide();
      $(".chkdesc").hide();
    }
    if (shoulders) {
      $(".shoulders").toggle('display')
      $("#shoulders").hide();
      $(".chkdesc").hide();
    }
    if (back) {
      $(".back").toggle('display')
      $("#back").hide();
      $(".chkdesc").hide();
    }

    $(this).prop("disabled", true)
    $(this).css("display", "none");

    $('.picker').text("Get ready to rock.")
    $('.comments').css('display', 'block');

    //    var age = $("#bs").val()

    //    alert(age * 3);
  });
});