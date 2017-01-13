// open live chat
$( ".chat-toggle" ).click(function() {
  $(".chat-container").toggleClass("chat-container-visible");
});

// show chat prevew
setTimeout(function(){
  $(".chat-preview").addClass("chat-preivew-visible");
  $(".chat-preview").append("Let me know if you have any questions. I'm here to help. 🎉✨🔑");
  setTimeout(function(){
    $(".chat-preview").removeClass("chat-preivew-visible");
  }, 6000 );
}, 3000 );
