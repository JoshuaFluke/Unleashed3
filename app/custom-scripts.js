$(document).ready(function () {
  $('.myButton').on('click', function (event) {
    $('#content').toggle('display');
    $('#content2').css('display', 'none');
    $('#content3').css('display', 'none')
  });


  $('.myButton2').on('click', function (event) {
    $('#content2').toggle('display');
    $('#content3').css('display', 'none');
    $('#content').css('display', 'none')
  });

  $('.myButton3').on('click', function (event) {
    $('#content3').toggle('display');
    $('#content2').css('display', 'none');
    $('#content').css('display', 'none')
  });


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

    $('.picker').text("Get ready to cock.");



    //    var age = $("#bs").val()

    //    alert(age * 3);
  });



});