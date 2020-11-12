$(document).ready(function(){

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  $('.features__slider').slick({
    infinite: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true
  })
  $('.showroom__slider').slick({
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  })
  $(window).scroll(function(){
    if ($(this).scrollTop() > 600) {
      $('.up-btn').show();
    }
    else {
      $('.up-btn').hide();
    }
  })
  $('.mobile-menu').click(function(){
    $('.header__nav').toggle('active');
  })
  $('.header__mobile-close').click(function(){
    $('.header__nav').toggle('active');
  })
  $(function(){
    $('.up-btn').click(function(){
      $('html,body').animate({scrollTop: 0}, 600);
      return false;
    });
  });
}) 

  