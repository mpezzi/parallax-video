$(function(){
  var body = $('body'), page = $('#page');

  $.getJSON('js/videos.json', function(data){
    $.each(data.data, function(i, video){
      $('#videos').append(ich.video(video));
    });
  });

  function scrollBg(y) {
    var body_pixels = y/10,
        page_pixels = y/5;
    body.css('backgroundPosition', '50% -' + body_pixels + 'px');
    page.css('backgroundPosition', '50% -' + page_pixels + 'px')
  }

  $(window).scroll(function(){
    var y = window.scrollY;
    scrollBg(y);
  });

});