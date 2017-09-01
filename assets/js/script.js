$( document ).ready(function() {
  // decode into page
  let b = baffle('.baffle').once();
  b.set({
    speed: 100
  });
  b.reveal(50, 500)
  $(".baffle").removeClass("display-none");

});
