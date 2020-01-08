$(document)
  .ready(function() {

    $('#top_right, #top_left, #bottom_left, #bottom_right').hover(function(){
      var video = $(this).find('video')[0];
      if (video.play) video.play();
    });

    $('#top_right, #top_left, #bottom_left, #bottom_right').mouseleave(function(){
      var video = $(this).find('video')[0];
      if (video.pause) video.pause();
    });

  })
;