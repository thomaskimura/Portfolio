// fun function every 3 seconds
setInterval(function(){
  newGif ();
}, 5000);
// display gif
function newGif(){
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=hacking",
    success: function(result){
      $("#gifme").css("background", "linear-gradient(rgba(255, 255, 255, 0.8) 1%, rgba(255, 255, 255, 1)), url('" + result.data.image_url + "')");
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
