$( document ).ready(function() {
  // decode into page
  let b = baffle('.baffle').once();
  b.set({
    speed: 100
  });
  b.reveal(100, 1000)
  $(".baffle").removeClass("opacity-0");

});
