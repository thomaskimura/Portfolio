$( document ).ready(function() {


  let b = baffle('.baffle').once();
  b.set({
    speed: 50
  });
  b.reveal(1000, 500)
  $(".baffle").removeClass("opacity-0");

  $( ".nav-toggle" ).click(function() {
    $("#nav").toggleClass("nav-fullpage-visible");
  });

  stickybits('.stickybits', { stickyBitStickyOffset: 63 });

  $( ".openToggle" ).click(function() {
    var element = $(this).attr("data-element");
    $("#"+element).toggleClass("display-none");
  });

  $( ".unchecked" ).click(function() {
    $(this).addClass("display-none");
    $(this).next().removeClass("display-none");
  });

  $( ".checked" ).click(function() {
    $(this).addClass("display-none");
    $(this).prev().removeClass("display-none");
  });

});
