// fun function every 3 seconds
setInterval(function(){
  newGif ();
}, 5000);
// display gif
function newGif(){
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=hacking",
    success: function(result){
      $("header").css("background", "linear-gradient(#d5eeff 1%, rgba(213, 238, 255, 0.5)), url('" + result.data.image_url + "')");
    }
  });
}

$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    dots: true,
    centerPadding: '100px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '30px'
        }
      }
    ]
  });
});
