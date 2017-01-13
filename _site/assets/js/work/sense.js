animateChat();

function animateChat () {
  setTimeout(function(){
    $("#blink1").addClass("fade");
  }, 500);

  setTimeout(function(){
    $('#blink1').removeClass("fade");
    $("#message1").addClass("fade");
  }, 1500);

  setTimeout(function(){
    $("#blink2").addClass("fade");
  }, 2000);

  setTimeout(function(){
    $('#blink2').removeClass("fade");
    $("#message2").addClass("fade");
  }, 4000);

  setTimeout(function(){
    $("#blink3").addClass("fade");
  }, 4200);

  setTimeout(function(){
    $('#blink3').removeClass("fade");
    $("#message3").addClass("fade");
  }, 6500);

  setTimeout(function(){
    $("#blink4").addClass("fade");
  }, 7000);

  setTimeout(function(){
    $('#blink4').removeClass("fade");
    $("#message4").addClass("fade");
  }, 8600);

  setTimeout(function(){
    $('#reply1').addClass("fade");
  }, 9200);

  resetChat();
}

function resetChat () {
  setTimeout(function(){
    $('#reply1').removeClass("fade");
    $('#blink1').removeClass("fade");
    $('#blink2').removeClass("fade");
    $('#blink3').removeClass("fade");
    $('#blink4').removeClass("fade");
    $('#message4').removeClass("fade");
    $('#message3').removeClass("fade");
    $('#message2').removeClass("fade");
    $('#message1').removeClass("fade");
    $('#reply1').addClass("opacity-0");
    $('#blink1').addClass("opacity-0");
    $('#blink2').addClass("opacity-0");
    $('#blink3').addClass("opacity-0");
    $('#blink4').addClass("opacity-0");
    $('#message4').addClass("opacity-0");
    $('#message3').addClass("opacity-0");
    $('#message2').addClass("opacity-0");
    $('#message1').addClass("opacity-0");
    animateChat();
  }, 20000);
}
