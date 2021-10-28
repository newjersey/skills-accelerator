$(document).ready(function() {
  var target = $('.bootcamp-animation').hide(),
      items = $('.bootcamp-animation').children(),
      counter = 0;
  function bannerFade() {
      target.fadeIn(1000).delay( 500 ).fadeOut(1000,function() {
          bannerFade();
      }).html(items[counter++]);
      if (counter == items.length) {
          counter = 0;
      } 
  }
  bannerFade();
});