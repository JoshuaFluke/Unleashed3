'use strict';

angular.module('workout')

.config(function($stateProvider) {
  $stateProvider
    .state('bodybuilder', {
      url: '/bodybuilder',
      templateUrl: 'routes/bodybuilder/bodybuilder.html',
      controller: 'bbCtrl'
    })
})

//------------------------Add comments to firebase Ctrl--------//
.controller('commentCtrl', function ($scope, fbService) {

  $scope.status = {
    isopen: false
  };

  $scope.comments = fbService.getAllComments();  //firebase object

  $scope.addComment = function () {
    console.log($scope.commentText);
    $scope.comments.$add($scope.commentText)

  }
})



  //-------------------------------Jquery------------------------------------//

.controller('bbCtrl', function(){

  $(":checkbox[name='4[]']").change(function () {
    if ($(":checkbox[name='4[]']:checked").length == 2)
      $(':checkbox:not(:checked)').prop('disabled', true);
    else
      $(':checkbox:not(:checked)').prop('disabled', false);
  });




  $(".go").on('click', function () {

    var arms = $("#arms").is(":checked");
    var chest = $("#chest").is(":checked");
    var legs = $("#legs").is(":checked");
    var shoulders = $("#shoulders").is(":checked");
    var back = $("#back").is(":checked");

    //console.log('wegwegrwe')
    if (arms) {
      $(".arms").toggle('display');
      $("#arms").hide();
      $(".chkdesc").hide();
    }
    if (chest) {
      $(".chest").toggle('display');
      $("#chest").hide();
      $(".chkdesc").hide();
    }
    if (legs) {
      $(".legs").toggle('display');
      $("#legs").hide();
      $(".chkdesc").hide();
    }
    if (shoulders) {
      $(".shoulders").toggle('display');
      $("#shoulders").hide();
      $(".chkdesc").hide();
    }
    if (back) {
      $(".back").toggle('display');
      $("#back").hide();
      $(".chkdesc").hide();
    }

    $(this).prop("disabled", true);
    $(this).css("display", "none");

    $('.picker').text("Get ready to rock.");
    $('.comments').css('display', 'block');

  })
  });