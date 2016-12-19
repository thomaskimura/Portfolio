$( document ).ready(function() {
  // header
  var myElement = document.querySelector(".headroom");
  var headroom  = new Headroom(myElement);
  headroom.init();

  // open nav
  $( ".nav-toggle" ).click(function() {
    $("#nav").toggleClass("nav-fullpage-visible");
  });
});

$( ".unchecked" ).click(function() {
  $(this).addClass("display-none");
  $(this).next().removeClass("display-none");
});

$( ".checked" ).click(function() {
  $(this).addClass("display-none");
  $(this).prev().removeClass("display-none");
});

$( ".openToggle" ).click(function() {
  var element = $(this).attr("data-element");
  $("#"+element).toggleClass("display-none");
});

// animate into page
$("#slide-up").removeClass("opacity-0");
$("#slide-up").addClass("slide-up");

// decode into page
let b = baffle('.baffle').once();
b.set({
  speed: 100
});
b.reveal(50, 500)
$(".baffle").removeClass("display-none");
