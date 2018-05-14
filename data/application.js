$(document).ready(function(){
  const arrow1 = $('.arrow-1');
  const arrow2 = $('.arrow-2');

  $('.img-toggle-1').hide();
  $('.img-toggle-2').hide();

  $('.js-logo').hover(function(){
    $(this).toggleClass('animated pulse');
  });

  arrow1.hover(function(){
    arrow1.toggleClass('animated bounce');
  });

  arrow2.hover(function(){
    arrow2.toggleClass('animated bounce');
  });

  arrow1.click(function(){
    $('.img-toggle-1').slideToggle(1000);
  });

  arrow2.click(function(){
    $('.img-toggle-2').slideToggle(1000);
  });

  $('.js-title-1').hover(function(){
    $(this).toggleClass('animated pulse');
  });

  $('.js-title-2').hover(function(){
    $(this).toggleClass('animated pulse');
  });

  $('.js-title-3').hover(function(){
    $(this).toggleClass('animated pulse');
  });

});
