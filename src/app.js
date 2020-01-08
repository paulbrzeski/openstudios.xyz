$(document)
  .ready(function() {

    $('video').each(function(){
      this.loop = true;
      this.play();
    });
  })
;