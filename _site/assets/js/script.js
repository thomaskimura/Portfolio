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
});
